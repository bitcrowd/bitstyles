#!/bin/sh

styleguide \
  --kss-source 'scss/**/*.scss' \
  --style-source 'build/bitstyles_styleguide.css' \
  --output 'styleguide' \
  --overviewPath 'README.md' \
  --readOnly \
  --watch \
  --server \
  --disableEncapsulation \
  --title 'bitstyles' \
  --extraHead '<script src="/assets/javascripts/a11y-dialog.js"></script>' \
  --extraHead '<script src="/assets/javascripts/styleguide-init.js"></script>' \
  --extraHead '<script src="/assets/javascripts/modal.js"></script>' \
  --extraHead '<script src="/assets/javascripts/expander.js"></script>' \
