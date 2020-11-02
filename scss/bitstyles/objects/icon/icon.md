# Icons

## SVG icon system

Icons are implemented using inline SVG where possible (see example markup). They must be accompanied by some machine-readable text for accessibility & SEO purposes. If there is to be no such text visible (e.g. based on design mockups), provide an alternative next to the `<svg>` element using a `<span class="u-visuallyhidden">` containing descriptive text.

Set icon sizes by overiding the `$bitstyles-icon-sizes` list (see `settings/_icon.scss`) e.g.

```scss
$bitstyles-icon-sizes: (
  's' 2rem,
  'm' 4rem,
  'l' 8rem
);
```

The base icon size is the same as surrounding text i.e. `1em`.
