#!/usr/bin/env python3
"""
Contact sheet of everything in public/images, composited on the site's soft-teal
so cut-out edges are judged the way a visitor sees them.

    python3 scripts/contact-sheet.py [out.png]
"""
import glob, os, sys
from PIL import Image, ImageDraw

OUT = sys.argv[1] if len(sys.argv) > 1 else 'contact-sheet.png'
files = sorted(glob.glob('public/images/*.webp'))
cols, cell = 6, 190
rows = (len(files) + cols - 1) // cols
sheet = Image.new('RGB', (cols * cell, rows * (cell + 18)), (250, 247, 248))
draw = ImageDraw.Draw(sheet)

for i, f in enumerate(files):
    im = Image.open(f).convert('RGBA')
    im.thumbnail((cell - 10, cell - 10), Image.LANCZOS)
    tile = Image.new('RGBA', (cell - 10, cell - 10), (231, 245, 246, 255))
    tile.alpha_composite(im, ((tile.width - im.width) // 2, tile.height - im.height))
    x, y = (i % cols) * cell + 5, (i // cols) * (cell + 18) + 5
    sheet.paste(tile.convert('RGB'), (x, y))
    draw.text((x + 2, y + cell - 8), os.path.basename(f)[:-5][:26], fill=(30, 50, 70))

sheet.save(OUT)
print(f'{len(files)} images -> {OUT}')
