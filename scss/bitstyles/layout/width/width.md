# Widths

## Bitstyles provides a series of classes focused on controlling width

They’re most commonly used as part of a grid system (see our grid system for more information on that), but should also be used alone if setting an element’s width is needed — as shown here — *instead of defining widths in a new CSS component*.

Set the `$bitstyles-widths` variable to define how many columns you need. To create multiple grid systems with different numbers of equal-width columns you can specify more than one column-count (most often only one is needed though) e.g. `$bitstyles-widths: (10, 12)` creates classes that can be used to split a row into 10 or 12 columns:

- `.l-width--1-of-10` … `.l-width--10-of-10`
- `.l-width--1-of-12` … `.l-width--12-of-12`.

If you define the `$bitstyles-widths-breakpoints` Sass list to contain the names of one or more breakpoints (it defaults to just `medium`), widths will also be created that apply only at those breakpoints:

`.l-width--1-of-12@medium`…

This allows you to create an element that is displayed at different sizes based on viewport size. See the section on responsive grid systems for an example of the most common uses for this.

### Dependencies

- `settings/widths`
- `tools/widths`
