---
layout: page2
title: Code
---

# Git

    git clone
    git add .
    git commit -m ""
    -u
    git push

# Vips

[lbivips](https://www.libvips.org/), A fast image processing library with low memory needs.

## to resize to a power of 2 (16384)

this allow to resize to a specific size:

    vipsthumbnail input.png --size 16384x -o output.png --vips-progress

if not, need to calculate a scale:

    width=$(vipsheader -f width somefile.tif)
    height=$(vipsheader -f height somefile.tif)
    size=$((width > height ? width : height))
    factor=$(bc <<< "scale=10; 32768 / $size")

    vips resize somefile.tif huge.tif $factor

using 8 bit color:

    vips colourspace thing.tif other.tif srgb

then use rezise:

    vips resize image_in.tif img_rescaled.tif 5.345513866231648

using [pyvips](https://pypi.org/project/pyvips/)

    import pyvips

    image = pyvips.Image.new_from_file('somefile.tif', access='sequential')
    image = image.colourspace('srgb')
    image = image.resize(32768 / max(image.width, image.height))
    image.dzsave('mypyramid')

## to make PNGtiles

    vips dzsave input.png  tileDir --layout google --centre --suffix .png --vips-progress

## To extend with white to a power of 2 (8192)

    vips gravity input.png centre 8192 8192 --extend white --vips-progress

## To convert SVG to PNG

    vips copy 'input.svg[dpi=10,scale=5,unlimited]' output.png --vips-progress

# OpenLayers
