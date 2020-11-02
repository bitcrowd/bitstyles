# Grid Systems

## A responsive html grid system using inline-block

Note this means *whitespace is important*. If necessary, use html comments between each `.l-grid__item` to remove any whitespace (see the markup example below), otherwise the browser will display a small gap between grid items.

As it’s an HTML grid system (not CSS), some wrapping elements are needed to create rows and columns (again see the markup in the examples below). Each of these grid items needs the class `.l-grid__item` and a width class. With current defaults, the widths provided include a 12-column system e.g. 1-of-12, 2-of-12, 3-of-12 … 11-of-12, 12-of-12.

Grids can be nested.

### Dependencies

- `layout/width`

## Grid system — base

### In the base grid system, columns are of proportional widths (a percentage of the full width) but not responsive

This means e.g. they cannot change from being 3-column on larger screens, to one column stacked on small screens (if you can, try resizing your browser window to see that the number of columns in the example below doesn’t change). See the Responsive Grid below for information on how to make your grid responsive.

## Grid system - responsive

### The grid system can also be used responsively — setting different widths for an element based on the viewport size

To do this, append the name of a breakpoint to the width class to have it activate only at that breakpoint e.g. `.l-width--12-of-12.l-width--6-of-12@m` to create an element that’s fullwidth for all viewports, then becomes half width for `m`-sized viewports and larger.

Multiple l-width--item/breakpoints combinations can be used to define a grid item’s width at several breakpoints (for all the breakpoints defined in the `$bitstyles-widths-breakpoints` Sass list).

This is commonly used to set a default mobile-first width of `.l-width--12-of-12` and a larger-screen width of e.g. `.l-width--4-of-12@m` for a three-column layout that becomes a single-column stack on small viewports.
