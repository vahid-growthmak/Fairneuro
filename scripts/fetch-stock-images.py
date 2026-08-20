#!/usr/bin/env python3
"""
Replace the placeholder illustrations in public/images with real photography.

Photos come from Pexels (free for commercial use). Hero subjects are cut out
with Vision's person-segmentation model so they sit on the decorative blobs the
way BlobPhoto expects; avatars and tiles are simply cropped.

    PEXELS_API_KEY=... python3 scripts/fetch-stock-images.py [--only heroAdhd,heroHome] [--dry-run]

Every download is recorded in public/images/CREDITS.md so the provenance of each
photo stays with the repo.
"""
from __future__ import annotations

import argparse, json, os, subprocess, sys, urllib.parse
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'images'
CUTOUT_BIN = Path(os.environ.get('CUTOUT_BIN', ROOT / 'scripts' / 'bin' / 'cutout'))
API = 'https://api.pexels.com/v1/search'

# kind: 'cutout' = person segmented onto transparency (hero blobs)
#       'framed' = rectangular photo shown inside a rounded card (heroes)
#       'crop'   = straight rectangular crop (tiles)
#       'face'   = square face crop (round testimonial avatars)
SPECS: dict[str, tuple[str, str, str]] = {
    # key                  query                                              orientation kind
    'heroHome':          ('happy woman smiling casual',                    'landscape', 'framed'),
    'heroAbout':         ('friendly woman smiling casual',             'landscape', 'framed'),
    'heroAssessments':   ('professional woman smiling arms crossed',          'landscape', 'framed'),
    'heroAdhd':          ('young man smiling casual',                    'landscape', 'framed'),
    'heroAutism':        ('young woman smiling casual',                        'landscape', 'framed'),
    'heroCombined':      ('young adult smiling casual',                     'landscape', 'framed'),
    'heroDyslexia':      ('student holding books smiling',                    'landscape', 'framed'),
    'heroDyscalculia':   ('student smiling holding notebook',                   'landscape', 'framed'),
    'heroDyspraxia':     ('teenager smiling casual',                        'landscape', 'framed'),
    'heroAdults':        ('happy man smiling casual',                    'landscape', 'framed'),
    'heroAdultAdhd':     ('man smiling casual shirt',                     'landscape', 'framed'),
    'heroAdultAutism':   ('woman smiling casual shirt',                   'landscape', 'framed'),
    'heroChildren':      ('happy child smiling school uniform',                             'landscape', 'framed'),
    'heroChildAdhd':     ('boy smiling school portrait',                             'landscape', 'framed'),
    'heroChildAutism':   ('girl smiling school portrait',                            'landscape', 'framed'),
    'heroClinical':      ('friendly doctor smiling',                       'landscape', 'framed'),
    'heroCoaching':      ('woman teacher smiling',                    'landscape', 'framed'),
    'heroConsultation':  ('woman with laptop smiling',                  'landscape', 'framed'),
    'heroContact':       ('call center agent headset smiling',                'landscape', 'framed'),
    'heroEmployers':     ('businesswoman smiling office',                    'landscape', 'framed'),
    'heroWorkplace':     ('businessman smiling office',                   'landscape', 'framed'),
    'heroSchools':       ('teacher smiling classroom',                       'landscape', 'framed'),
    'heroReferrals':     ('nurse smiling clipboard',                'landscape', 'framed'),
    'heroSupport':       ('friendly woman smiling arms crossed',                     'landscape', 'framed'),
    'heroFaqs':          ('woman thinking smiling',                         'landscape', 'framed'),
    'heroHowItWorks':    ('man smiling shirt studio',                'landscape', 'framed'),
    'heroResources':     ('woman holding book smiling',                           'landscape', 'framed'),
    'heroScreener':      ('person using laptop smiling',                     'landscape', 'framed'),
    'heroStandards':     ('confident woman smiling professional',                  'landscape', 'framed'),
    'heroWhy':           ('happy person smiling natural light',            'landscape', 'framed'),
    'tileAdults':        ('adults talking together happy',                          'landscape','crop'),
    'tileChildren':      ('children playing outdoors happy',                        'landscape','crop'),
    'avatarAlex':        ('smiling man casual outdoors',                            'square',   'face'),
    'avatarSarah':       ('smiling woman casual outdoors',                          'square',   'face'),
    'avatarPriya':       ('happy woman smiling portrait',                       'square',   'face'),
    'avatarJames':       ('smiling grey haired man',                      'square',   'face'),
    'avatarParent':      ('smiling woman face portrait studio',                         'square',   'face'),
}

# Rendered sizes. Heroes are drawn at up to 640px wide and scaled 1.14, so 1200px
# tall leaves plenty of headroom on 2x displays without bloating the repo.
MAX_TRIES = 12  # candidates to try per image before giving up

TARGET = {'cutout': (None, 1200), 'framed': (1280, 1000), 'crop': (1200, 800), 'face': (400, 400)}


def slug(key: str) -> str:
    out = ''
    for ch in key:
        out += ('-' + ch.lower()) if ch.isupper() else ch
    return out


def curl(url: str, *, headers: dict[str, str] | None = None, dest: Path | None = None) -> bytes:
    """Fetch over HTTPS. Uses curl rather than urllib, which has no CA bundle here."""
    cmd = ['curl', '-sSL', '--fail', '--max-time', '90',
           '-A', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) fairneuro-image-fetch']
    for k, v in (headers or {}).items():
        cmd += ['-H', f'{k}: {v}']
    if dest:
        cmd += ['-o', str(dest)]
    cmd.append(url)
    r = subprocess.run(cmd, capture_output=True)
    if r.returncode != 0:
        raise RuntimeError(f'fetch failed ({r.returncode}): {r.stderr.decode().strip()[:160]}')
    return r.stdout


def search(key_name: str, query: str, orientation: str, used: set[int], api_key: str) -> list[dict]:
    qs = urllib.parse.urlencode(
        {'query': query, 'orientation': orientation, 'per_page': 40, 'size': 'large'}
    )
    body = curl(f'{API}?{qs}', headers={'Authorization': api_key})
    data = json.loads(body)
    if 'photos' not in data:
        raise RuntimeError(f'unexpected Pexels response: {body[:160].decode(errors="replace")}')
    out = [p for p in data.get('photos', []) if p['id'] not in used]
    if not out:
        raise LookupError(f'no unused Pexels result for {key_name!r} ({query!r})')
    return out


def download(url: str, dest: Path) -> None:
    curl(url, dest=dest)
    # a CDN that blocks hotlinking returns an HTML error page with a 200
    with dest.open('rb') as f:
        if not f.read(3).startswith(b'\xff\xd8\xff'):
            raise RuntimeError('downloaded file is not a JPEG (hotlink blocked?)')


class Rejected(Exception):
    """Candidate photo is unusable — try the next search result."""


def check_colour(im: Image.Image) -> None:
    """Reject black-and-white photos; the palette is warm and they read as errors."""
    px = im.convert('RGB').resize((60, 60)).getdata()
    sat = [ (max(p) - min(p)) / max(p, default=1) for p in px if max(p) > 24 ]
    mean = sum(sat) / len(sat) if sat else 0
    if mean < 0.14:
        raise Rejected(f'monochrome (saturation {mean:.2f})')


def check_bright(im: Image.Image, floor: int = 96) -> None:
    """Reject dark, dramatic studio shots — wrong register for a clinic page."""
    px = list(im.convert('L').resize((40, 40)).getdata())
    mean = sum(px) / len(px)
    if mean < floor:
        raise Rejected(f'too dark (mean luminance {mean:.0f})')


def check_intact(im: Image.Image) -> None:
    """Reject fragmented masks — floating debris around a badly segmented subject."""
    alpha = im.getchannel('A').point(lambda v: 255 if v > 128 else 0)
    small = alpha.resize((120, 120))
    seen, best, total = set(), 0, 0
    px = small.load()
    for y in range(120):
        for x in range(120):
            if px[x, y] == 0 or (x, y) in seen:
                continue
            stack, size = [(x, y)], 0
            seen.add((x, y))
            while stack:                       # flood fill
                cx, cy = stack.pop()
                size += 1
                for nx, ny in ((cx+1,cy), (cx-1,cy), (cx,cy+1), (cx,cy-1)):
                    if 0 <= nx < 120 and 0 <= ny < 120 and (nx, ny) not in seen and px[nx, ny]:
                        seen.add((nx, ny)); stack.append((nx, ny))
            total += size
            best = max(best, size)
    if total and best / total < 0.86:
        raise Rejected(f'fragmented mask (largest piece {best/total:.0%})')


def process(src: Path, dest: Path, kind: str) -> None:
    if kind == 'cutout':
        cut = src.with_suffix('.cut.png')
        result = subprocess.run([str(CUTOUT_BIN), str(src), str(cut)], capture_output=True, text=True)
        if result.returncode != 0:
            raise Rejected(f'cut-out failed: {result.stderr.strip()[:60]}')
        try:
            probe = json.loads(result.stdout.strip())
        except json.JSONDecodeError:
            probe = {}
        # one clear, uncropped, reasonably large face
        if probe.get('faces', 0) < 1:
            raise Rejected('no face detected')
        if probe.get('faces', 0) > 1:
            raise Rejected(f"{probe['faces']} faces — hero subjects should be one person")
        if probe.get('faceInset', 0) < 0.015:
            raise Rejected('face touches the frame edge (cropped head)')
        if probe.get('faceHeight', 0) < 0.09:
            raise Rejected(f"subject too small (face {probe.get('faceHeight', 0):.0%} of frame)")
        im = Image.open(cut).convert('RGBA')
        check_colour(im)
        check_intact(im)
        im = im.crop(im.getbbox())            # trim the transparent margin
        _, h = TARGET['cutout']
        im = im.resize((round(im.width * h / im.height), h), Image.LANCZOS)
        im.save(dest, 'WEBP', quality=86, method=6)
        return

    if kind in ('face', 'framed'):
        probe_png = src.with_suffix('.probe.png')
        r = subprocess.run([str(CUTOUT_BIN), str(src), str(probe_png)], capture_output=True, text=True)
        if r.returncode != 0:
            raise Rejected('no person detected')
        try:
            probe = json.loads(r.stdout.strip())
        except json.JSONDecodeError:
            probe = {}
        min_face = 0.16 if kind == 'face' else 0.07
        max_faces = 1 if kind == 'face' else 2
        if not 1 <= probe.get('faces', 0) <= max_faces:
            raise Rejected(f"{probe.get('faces', 0)} faces — needs 1 to {max_faces}")
        if probe.get('faceHeight', 0) < min_face:
            raise Rejected(f"face too small ({probe.get('faceHeight', 0):.0%})")
        if probe.get('faceInset', 0) < 0.02:
            raise Rejected('face too close to the frame edge')

    im = Image.open(src).convert('RGB')
    check_colour(im)
    check_bright(im, floor=96 if kind == 'face' else 82)
    tw, th = TARGET[kind]
    scale = max(tw / im.width, th / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = (im.width - tw) // 2
    # faces sit high in a portrait crop; bias upward rather than centring
    top = (im.height - th) // 8 if kind in ('face', 'framed') else (im.height - th) // 2
    im.crop((left, top, left + tw, top + th)).save(dest, 'WEBP', quality=86, method=6)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--only', help='comma-separated image keys')
    ap.add_argument('--dry-run', action='store_true')
    args = ap.parse_args()

    api_key = os.environ.get('PEXELS_API_KEY')
    if not api_key and not args.dry_run:
        print('PEXELS_API_KEY is not set', file=sys.stderr)
        return 2
    if not CUTOUT_BIN.exists() and not args.dry_run:
        print(f'cut-out binary missing at {CUTOUT_BIN}', file=sys.stderr)
        return 2

    keys = args.only.split(',') if args.only else list(SPECS)
    tmp = ROOT / '.image-cache'
    tmp.mkdir(exist_ok=True)

    used: set[int] = set()
    credits: list[str] = []
    failures: list[str] = []

    for key in keys:
        query, orientation, kind = SPECS[key]
        dest = OUT / f'{slug(key)}.webp'
        if args.dry_run:
            print(f'{key:18} -> {dest.name:28} [{kind}] "{query}"')
            continue
        try:
            candidates = search(key, query, orientation, used, api_key)
        except Exception as exc:
            failures.append(f'{key}: {exc}')
            print(f'✗ {key:18} {exc}', file=sys.stderr)
            continue

        chosen, why = None, []
        for photo in candidates[:MAX_TRIES]:
            raw = tmp / f'{slug(key)}.jpg'
            try:
                download(photo['src']['large2x'], raw)
                process(raw, dest, kind)
            except Rejected as r:
                why.append(f"#{photo['id']} {r}")
                continue
            except Exception as exc:
                why.append(f"#{photo['id']} {exc}")
                continue
            chosen = photo
            break

        if not chosen:
            failures.append(f'{key}: no candidate passed ({"; ".join(why[:3])})')
            print(f'✗ {key:18} no candidate passed', file=sys.stderr)
            for w in why[:4]:
                print(f'      {w}', file=sys.stderr)
            continue

        used.add(chosen['id'])
        credits.append(
            f"| {dest.name} | [{chosen['photographer']}]({chosen['photographer_url']}) "
            f"| [Pexels #{chosen['id']}]({chosen['url']}) |"
        )
        skipped = f'  (skipped {len(why)})' if why else ''
        print(f'✓ {key:18} {dest.name}  ({dest.stat().st_size // 1024} KB){skipped}')

    if credits:
        existing: dict[str, str] = {}
        old = OUT / 'CREDITS.md'
        if old.exists():
            for line in old.read_text().splitlines():
                if line.startswith('| ') and '---' not in line and 'Photographer' not in line:
                    existing[line.split('|')[1].strip()] = line
        for row in credits:
            existing[row.split('|')[1].strip()] = row
        credits = list(existing.values())
        (OUT / 'CREDITS.md').write_text(
            '# Photo credits\n\n'
            'Photography from [Pexels](https://www.pexels.com), free for commercial use.\n'
            'Attribution is not legally required but is recorded here for provenance.\n\n'
            '| File | Photographer | Source |\n| --- | --- | --- |\n'
            + '\n'.join(sorted(credits)) + '\n'
        )
        print(f'\nwrote {OUT / "CREDITS.md"}')

    if failures:
        print(f'\n{len(failures)} failed:', file=sys.stderr)
        for f in failures:
            print('  ' + f, file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
