#!/usr/bin/env python3
"""
Point lib/images.ts at the photographs produced by fetch-stock-images.py.

Only keys whose .webp actually exists are switched, so a partial fetch leaves
the remaining entries on their placeholder SVG rather than breaking the build.
"""
import pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
IMAGES = ROOT / 'lib' / 'images.ts'
PUBLIC = ROOT / 'public' / 'images'

src = IMAGES.read_text()
switched, missing = [], []

def repl(m: re.Match) -> str:
    key, name = m.group(1), m.group(2)
    if (PUBLIC / f'{name}.webp').exists():
        switched.append(key)
        return f"{key}: '/images/{name}.webp',"
    missing.append(key)
    return m.group(0)

out = re.sub(r"(\w+): '/images/([\w-]+)\.svg',", repl, src)
IMAGES.write_text(out)

print(f'switched {len(switched)} entries to .webp')
if missing:
    print(f'still on .svg ({len(missing)}): ' + ', '.join(missing))

# Remove SVGs that nothing references any more. Scan every source file, not
# just the manifest — other modules hardcode paths too.
referenced: set[str] = set()
for d in ('app', 'components', 'lib', 'sanity'):
    for f in (ROOT / d).rglob('*'):
        if f.suffix in {'.ts', '.tsx'} and f.is_file():
            referenced |= set(re.findall(r"'/images/([\w-]+\.\w+)'", f.read_text()))
removed = 0
for svg in sorted(PUBLIC.glob('*.svg')):
    if svg.name not in referenced:
        svg.unlink(); removed += 1
print(f'removed {removed} unreferenced placeholder SVGs')
