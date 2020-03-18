# Fixed-ratio

## Enforces an aspect ratio on this element and its contents

The element takes 100% width, then the height is set to the keep the element at the specified ratio. Default ratio is defined as 16:9 in the Sass map `$fixed-ratio-default-ratio`, under the keys `width` and `height` e.g.

```scss
$fixed-ratio-default-ratio: (
  'width': 10,
  'height': 20
)
```
