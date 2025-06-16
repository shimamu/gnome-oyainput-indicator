#!/bin/bash
set -e

# Create combined screenshot image using ImageMagick
magick \
  assets/screenshot-active.png \
  assets/screenshot-paused.png \
  assets/screenshot-inactive.png \
  -append \
  assets/screenshot-all.png

echo "✅ Combined screenshot saved to assets/screenshot-all.png"

