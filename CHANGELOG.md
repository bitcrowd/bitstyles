# Changelog

## Unreleased

### Added

- New Sass map `$bitstyles-shadows-shadows` for holding global shadow design tokens as a Sass list, and a `shadows.get()` function for accessing them in your Sass
- New helper function `shadow.generate()` to generate multi-layered “natural” shadows based on the color and distances you give
- Two functions (`shadow.to-box-shadow()` and `shadow.to-drop-shadow()`) for translating those shadows (which are specified in Sass' list format) into either CSS `box-shadow` format, or CSS filter `drop-shadow` format. Not necessary for the shadows accessed using `shadows.get()`
- New `u-shadow` and `u-drop-shadow` utility classes to set box-shadows and drop-shadows respectively

### Fixed

- `u-bg` classes will now be output with the correct breakpoint suffix

### Changed

- Renames `tools/_directional-properties.scss` -> `tools/_properties.scss`, so any imports of those files will need to be updated to reflect that
- Renames `output-properties()` -> `output()`
- Renames `output-directional-properties()` -> `output-directional()`

## [[4.0.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v4.0.0) - 2021-12-20

### Added

- `u-bg` classes can now be made available at different breakpoints by overriding the `$bitstyles-bg-breakpoints` variable
- `u-fg` classes can now be made available at different breakpoints by overriding the `$bitstyles-fg-breakpoints` variable
- Default settings for `u-fg` classes now include `white` as an option
- `u-font` classes can now be customized by overriding the `$bitstyles-font-weight-values` and `$bitstyles-font-style-values` variables. They can be made available at different breakpoints by overriding the `$bitstyles-font-weight-breakpoints` and `$bitstyles-font-style-breakpoints` variables
- `u-text` classes can now be customized by overriding the `$bitstyles-text-values` variable. They can be made available at different breakpoints by overriding the `$bitstyles-text-breakpoints` variable
- `u-overflow` classes are now also available for `scroll`, `hidden`, and `auto` by default, and can be set by overriding `$bitstyles-overflow-values`
- You can now override the font styles for `input-text`s, `selects`, and `buttons`.
- New `u-font` classes to specify font-family. Defaults to `u-font-header` and `u-font-body`, which apply the respective font stack as specified in `settings/typography`. This can be overridden using `$bitstyles-font-family-values`, and can be made responsive by specifying breakpoints in `$bitstyles-font-family-breakpoints`
- Color & background-color of the `html` element can now be specified using `$bitstyles-html-color` and `$bitstyles-html-background-color`, and default to the `text` and `background` colors specified in your global color-palette
- Default key-name to return when asking for a color without specifying it (e.g. `palette.get('white')`) can now be set using `$bitstyles-color-palette-default-key`
- There’s now a helper function `font-size.get($font-size, $breakpoint)` which returns font-sizes from the global map

### Fixed

- The height of inputs, selects, and `.a-button`s now matches regardless of the border-width
- Modals now only show scrollbars (on OSes/configs where scrollbars are shown) when they’re needed
- Typographic scale of base elements is no longer prefixed when a prefix is specified

### Changed

- The font-sizes specified in `settings/typography` `$font-sizes` map should now use `rem` units instead of `px`. The Sass will still compile if you specify using `px` as before, but the resulting CSS will not follow current best practices (to use `rem` units for specifying font-size)

### Breaking

- All utility classes which had a double dash in their classname (`--`) now only have a single dash. You’ll need to rename all these classes to use single dashes
  - `u-bg`
  - `u-fg`
  - `u-font`
  - `u-line-height`
  - `u-overflow`
  - `u-text`
  - `u-round`
- Values for the display classes (`u-block`, `u-flex` etc.) will now need to be set unquoted. If you previously were overriding the `$bitstyles-display-values` variable, make sure all the values on the right hand side are unquoted CSS values e.g. `'block': block` instead of `'block': 'block'`, as was previously possible
- If you were using the `$bitstyles-input-padding` variable, you’ll now need to set `$bitstyles-input-padding-vertical` and `$bitstyles-input-padding-horizontal` separately
- The `u-overflow-x` and `u-overflow-y` classes were renamed to `u-overflow-x-auto` and `u-overflow-y-auto`, respectively
- The media-query/breakpoint mixin is no longer called using `media-query.media-query()`. You’ll need to update all uses of this to `media-query.get()`
- `typography.$font-sizes` must now be specified using `rem` if you want to use `rem` units (recommended), instead of `px` units, as was previously possible
- Removes the `unit-conversions` functions

## [[3.1.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v3.1.0) - 2021-12-20

### Added

- There are now variables to specify the `color`, `text-decoration`, `background-color`, and `box-shadow` of links in each state
- Default margins for heading elements and paragraphs can now be specified with the `$margin-heading` and `$margin-paragraph` variables respectively
- An extra size was added to the default gap classes: `u-gap-xs`

### Fixed

- The `border-width` and `border-style` are no longer hardcoded in the dropdown separator styles. The existing default value for the `$separator-border` variable already set those properties, so you so not need to change anything unless you override that variable in your project. This fixes the issue of an invalid `border` property when your build does not get automatically fixed by the build tools (in the case of bitstyles, postcss was correcting the border property)
- Link variables can all now be overridden using any of the four import/use methods

### Changed

- `dl` examples are now aligned to the baseline, using the `u-items-baseline` class. Update `dl` classnames in your project to match
- `$font-family-webfont` is now `$webfont-family-name`. If you’ve overridden this variable, you will need to rename it. The variable should only contain the filename (no filename extensions, as before), as the path to your fonts is now set with the `$webfont-base-url` variable (which defaults to `../assets/fonts/`). If you host your fonts in a different location, you should change this value to match

### Breaking

- `img` and `iframe` now default to `display: block`. Use the utility class `u-inline` if you need to replace the old behavior
- The default margin for paragraphs is now `0`. Use the `$margin-paragraph` variable in typography settings to change this, or use margin utility classes on the HTML elements
- Variable names for links have changed — the word `link` is now omitted, resulting in e.g. `$color-link` becoming `$color`, `$link-color`, or `$bitstyles-link-color`, and `$color-link-hover` becoming `$color-hover`, `$link-color-hover`, or `$bitstyles-link-color-hover`, depending on how you use bitstyles
- Variable names for breakpoints have changed — the word `breakpoint` is now omittted, resulting in e.g. `$breakpoint-boundary-width` becoming `$boundary-width`, `$breakpoints-boundary-width`, or `$bitstyles-breakpoint-boundary-width`, depending on how you use bitstyles

## [[3.0.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v3.0.0) - 2021-11-17

### Added

- The entire library is now compatible with the [Sass module system](https://sass-lang.com/blog/the-module-system-is-launched), and backwards compatibile with the existing Sass import system. This means you can import the whole library or its parts with `@use`/`@forward` or `@import`, and override variables in all of the available ways. The functions and mixins are all available in both systems
- The breakpoints at which `.a-card` is output can now be specified with the `$bitstyles-card-breakpoints` Sass variable. Default is at `m`, and `l` breakpoints
- Padding for `.a-card`s is specifiable with the `$bitstyles-card-sizes` Sass variable. By default there is a base size, and a large size
- A new `.a-card__header` element allows edge-to-edge header sections for cards of all sizes
- Adds row-start utility classes `.u-row-start-x` where `x` is a number, to specify which row an element should start in

### Fixed

- `.u-col-span-` and `.u-col-start-` classes are available at `@l` breakpoint again. Fixes the complex form example
- `$bitstyles-col-span-breakpoints` variable has been corrected to `$bitstyles-col-start-breakpoints`. If you were using this variable, you’ll need to rename it

### Breaking

- As `.a-card` elements now set their own padding, remove any utility padding classes. If the padding does not match your requirements, it can be customized using the cards’ sass variables
- If you output any flashes or other content at the top of an `.a-card` element using negative-margin utility classes to cancel out the padding, these classes should now be replaced with the `.a-card__header` class

## [[2.0.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v2.0.0) - 2021-07-22

### Added

- Added `$bitstyles-grays-hint-color-mix` and `$bitstyles-grays-hint-color` variables to allow control over how the `gray` color palette is generated
- Added `$bitstyles-color-mix-percentages` list variable, giving control over which percentage intervals are generated in each color’s palette
- There’s now the `generate-palette($base-color, $mix-color, $percentages)` function to automate generating palettes of individual colors
- Color scales based on the semantic colors (`brand-1`, `warning` etc.) are now available in shades as well as tints (`brand-1-shades`, `warning-shades` etc.)
- Inputs’ placeholder text font-weight and font-style can now be customized using `$bitstyles-input-placeholder-font-weight` and `$bitstyles-input-placeholder-font-style` variables respectively
- The `.u-gap` classes are now available at `m` and `xl` breakpoints
- The `.u-align`, `.u-self`, and `.u-justify` sets of utility classes are now all available at `m` breakpoint. The available breakpoints can be customized
- The various `.u-flex-` classes are now available at the `m` breakpoint. The available breakpoints can be customized by overriding `$bitstyles-flex-breakpoints`
- Adds `.u-flex-nowrap` and `.u-flex-row` classes
- Adds `url-encode-color` function to our color tools, to encode hex colors correctly

### Changed

- Background color of the `html` element is now the `background` color at 100% instead of 95%
- Default color scales are now generated with colors at more percentage mixes: `1, 2, 3, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 97, 98, 99, 100`

### Docs

- Adds a `Design Tokens` section to the storybook, and lists all available colors

### Fixed

- Selects now correctly display the icon specified as a background in Sass, even when postcss isn’t being used (note that you’ll have to deal with the prefixing of the `appearance` property, prefereably using autoprefixer)
- `avatar` variables are now able to be overridden
- All `dropdown` variables are now able to be overridden
- All `ui-group` variables are now able to be overridden

### Breaking

- Renamed `u-flex__shrink-x` (where `x` is a number) to `u-flex-shrink-x`
- Renamed `u-flex__grow-x` (where `x` is a number) to `u-flex-grow-x`
- Renamed `u-flex--wrap` to `u-flex-wrap`
- Renamed `u-flex--col` to `u-flex-col`
- The `palette()` function has been renamed to `palette.get()`
- The `spacing()` function has been renamed to `spacing.get()`

## [[1.5.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.5.0) - 2021-06-28

### Added

- `.u-grid-cols` classes are available at the `xl` breakpoint
- All `.u-grid-cols`, `.u-col-span`, and `.u-col-start` classes are now specified using Sass variables, and can therefore be overridden

### Breaking

- All `.u-grid--x-col` classes, where `x` is a number, have been renamed to `u-grid-cols-x`
- All `.u-grid__col-span-x` classes, where `x` is a number, have been renamed to `.u-col-span-x`
- All `.u-grid__col-x` classes, where `x` is a number, have been renamed to `.u-col-start-x`

## [[1.4.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.4.0) - 2021-06-24

### Added

- We have a new media-query available in `$bitstyles-breakpoints`: `motion-ok`. It’s available using the `media-query` mixin, and applies when the user has not set a preference to reduce motion in their UIs, allowing a [no-motion-first](https://tatianamac.com/posts/prefers-reduced-motion/) approach to animations
- All dropdown, sidebar, and navbar examples in our storybook documentation have JS behaviour using alpinejs
- Modal behavior is implemented using `a11y-dialog`
- Margin utility classes now include `auto` as a size

### Changed

- The `topbar` atom is now not fixed by default. Set the variable `$bitstyles-topbar-position` to `fixed` to replace that behavior

### Breaking

- The `topbar` atom no longer sets a background and foreground color, and the corresponding variables (`$bitstyles-topbar-color` and `$bitstyles-topbar-background-color`) have been removed. If you were using that functionality, use the `u-fg` and `u-bg` utility classes instead

## [[1.3.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.3.0) - 2021-06-17

### Changed

- The size of gap generated by `.u-gap-m` is now `1rem`, not `0.8rem`

### Added

- Dropdown atom has a new variant `.a-dropdown--full-width` that causes the dropdown to span the full width of its nearest `position: relative` parent element. Combinable with `a-dropdown--top`
- Gap sizes can now be specified, and the class suffixes named, using a Sass variable
- You can now override which directions the margin and padding utility classes are output for (`top`, `bottom`, etc.), and what those classes are named independently of the CSS property, using `$bitstyles-margin-directions` and `$bitstyles-padding-directions` respectively
- You can now override the sizes the margin & padding utility classes are output for, using `$bitstyles-margin-sizes` and `$bitstyles-padding-sizes` respectively
- Border utility classes are now available at all four directions, and on a per-color basis. Currectly only `gray-10` and `gray-70`, this can now be customized using sass variables.
- Border utility classes can now be available at breakpoints by overriding the `$bitstyles-border-breakpoints` variable
- Default breakpoints now include `xl`, for ultra-widescreens
- `.a-content` max-width and padding is now customisable using Sass variables, and by default now includes a 100% option
- A new `.u-z` utility class for setting `z-index`
- New examples of full app layouts

### Fixed

- The checkbox checkmark is now correctly centered, and only rendered once

### Breaking

- The double-dashes have been removed from the `.u-margin` and `.u-padding` classes (e.g. `.u-margin-m--top`). To migrate, replace the `--` in the classnames with `-`
- The `.u-border--top` `.u-border--bottom` classes have been replaced with `.u-border-gray-70-top` and `.u-border-gray-10-bottom` respectively
- `.u-fixed-ratio` is renamed `.u-aspect-ratio`, and the double-dashes are replaced with single. Please rename all uses e.g. `.u-fixed-ratio--16-9` becomes `.u-aspect-ratio-16-9`
- `.u-fixed-ratio__inner` has been removed, and is no longer necessary. To migrate, move other classes that may be on that element to the `.u-fixed-ratio` element, and remove the `.u-fixed-ratio__inner` element
- If you were relying on `.u-fixed-ratio` applying non-static positioning, you’ll need to apply `.u-relative` or `.u-absolute` to the `.u-aspect-ratio` element
- Now requires version `^1.34.0` of `dart-sass`, in order to use the new `Math.div` function, and remove all the division using `/` characters.
- Removes the `content` mixin. If you need the `content` functionality, use the `.a-content` classname instead (it’s customisable using Sass variables, see the settings.scss file)
- `.u-flex--inline` has been renamed `.u-inline-flex` to match the name of the display property, and is no longer a variant of `.u-flex`, but can be used alone. Where `.u-flex--inline` is paired with `.u-flex` remove the latter, and rename it to `.u-inline-flex`

## [[1.2.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.2.0) - 2021-05-04

### Added

- More aspects of the sidebar organism can now be specified in Sass variables
- `a-dropdown--top` variant of dropdown component

### Changed

- Sidebar examples now include the closed state, so that it can be seen on small-viewports

### Fixed

- Every classname is now prefixed with `$bitstyles-namespace`, if specified

### Breaking

- Sidebar Sass variables have been renamed, so if you were using or overriding those variables in your project, you’ll need to rename `$sidebar-width` to `$bitstyles-sidebar-large-width`
- Renames `.a-dropdown--reverse` to `.a-dropdown--right`
- Classnames for the modal component are now prefixed with `.o-` instead of `.c-`, you’ll need to update `c-modal__overlay` to `o-modal__overlay`, and `c-modal__content` to `o-modal__content`

## [[1.1.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.1.0) - 2021-04-15

### Added

- New component in UI layer: sidebar
- Added this changelog

### Changed

- [Docs] Improved documentation: added links to classes used in the storybook examples
- [Docs] Navbar examples are now in iframes of fixed height, so the examples are clearly visible in docs view
- Webfonts are now included in the release
- Updated the modal component visual styles, and added examples for dialogs, alerts, and informational modals
- Breadcrumbs & pagination components are now wrapped in labelled `<nav>` elements
- Imports of Sass partials are now alphabetized within each layer
- Navbar component (largescreen version) now scrolls instead of wrapping when the links inside take up more space than available

### Fixed

- `a-button--nav` and `a-button--nav-large` are no longer centered

### Breaking

- Node version bumped to LTS (14.16.0)

## [[1.0.6]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.0.6) - 2021-03-31

### Changed

- The releases now contain compiled CSS. The CSS is also available at [https://cdn.jsdelivr.net/npm/bitstyles@1.0.6/build/bitstyles.css](https://cdn.jsdelivr.net/npm/bitstyles@1.0.6/build/bitstyles.css). [#436] Add npmignore file (#437).

## [[1.0.5]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.0.5) - 2021-03-29

### Changed

- Adds a complex multi-section form example, and a better layout for simple forms. [#429] Improve form examples
- Breadcrumb UI component now has its arrow icons to the right of each breadcrumb-item. [#431] Breadcrumb arrows to the right
- `<legend>` elements no longer have padding as default
- The `.a-bordered-header` atom is now left-aligned rather than centered

### Fixed

- Selects, buttons, and inputs all have the same height, and share colors

### Breaking

- `.u-grid` classes no longer set `grid-gap`. Responsibility for `grid-gap` has been moved to `.u-gap`. You’ll need to add relevant grid-gap classes to your grid elements. Adding `.u-gap-m` to all your grid containers will result in an equivalent layout as before this change

## [[1.0.4]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.0.4) - 2021-03-17

### Added

- A filter component built using the existing dropdown and checkboxes
- A filter component for applying free-text filters
- An new icon page in our documentation, giving examples of all the icons used in our documentation

### Changed

- `.a-button--danger` no longer overrides base colors (only does so on hover/focus etc.), so you can use it in conjunction with other button types to make them “dangerous”
- All icons in our documentation are now built with symbols from a centralised SVG file using `<use>`
- All our button types now only alter the base button’s `border-color`, not the shorthand `border`, to ensure equal heights of buttons
- `.a-button--nav` now responds to `aria-expanded`, so it can be used for dropdowns
- `.a-button--tab` now responds to `aria-current`, so a tab-like interface can be presented when the tab switching involves navigating to a new URL
- `.a-button--ui` now responds to `aria-current`
- buttons now all use regular font-weight

### Breaking

- The `overflow-x` and `overflow-y` mixins no longer set the max width and height respectively. If you were making direct use of the mixins, you’ll need to add max widths or heights to your CSS, as needed.

## [[1.0.3]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.0.3) - 2021-03-15

### Added

- `.o-notification-center` component, that handles layout of notifications in the top right of the viewport, overlaying other content
- `.a-flash` component to be used for displaying global updates at the top of the viewport, or at the top of a form, in the document flow
- Negative margin utility classes `.u-margin-neg-#{$size}`

### Changed

- Most of our button types now only alter the base button’s `border-color`, not the shorthand `border`, to ensure equal heights of buttons
- Input elements now only alter the base style’s `border-color`, not the shorthand `border`, to ensure equal heights and consistent appearance
- Simplifies the way we import webfonts, and allows easier setup and overriding, using a more explicit `$bitstyles-webfont-variants` nested map. Filenames no longer need to match the previous format, though it’s advised

## [[1.0.2]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.0.2) - 2021-03-11

### Added

- `.u-border` utility classes
- Storybook documentation now includes the `a11y-addon` for in-browser checking of some a11y low-hanging fruit
- `select` elements can now display different border-color, background-color etc when they are invalid. There are examples showing how to correctly markup invalid `select`s (it is quite specific due to browser implementations)
- There’s a new section-heading component in the documentation, with variants containing buttons
- Flex and box-alignment classes are now available at various breakpoints

### Changed

- `.a-button--tab` indicator color is now set by a specific `$bitstyles-button-tab-border-color` sass variable instead of using the border variable. Borders can now be set on `a-button--tab`s, whereas before they could not (by default they’re all transparent, so there will be no visual change)
- Webfonts are now imported using a base URL and several variants specified in $bitstyles-webfont-variants. The filenames of the webfont files need to match the convention `${base-url}-${variant}.${woff|woff2}`
- As per the current state of Assistive Technology’s interpretation of forms, examples of select element usage now place the label as sibling to (not parent of) the select. If you were using the previous structure, please switch

## [[1.0.1]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.0.1) - 2021-03-04

### Added

- `.u-round` for applying rounded corners to elements
- `.o-ui-group` for visually binding several closely-related interactive elements (buttons or inputs)
- `.a-button--ui`, for buttons that are not the primary action of a screen
- `.a-card` is now available at the `m` breakpoint
- Example form layouts for login & signup flows
- `.u-grid` and variants are now available at `l` breakpoint
- `.u-padding` and variants are now available at various breakpoints

### Changed

- Specifies the newly-published documentation as our homepage

### Breaking

- `.u-list-reset` is replaced with `.a-list-reset`. You’ll need to update your usage, and check instances where you use other classes on the same element, as the location of this class in the source order has changed

## [[1.0.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v1.0.0) - 2021-03-04

### Added

- new `.o-navbar` organism
- new `.o-table` organism
- new `.a-badge` atom
- new `.a-avatar` atom
- new `.a-dropdown` (menu) atom
- new collection of button types
- new `.a-card` atom for sectioning or highlighting content
- new `.a-dl` atom

### Changed

- updates storybook one major version
- all documentation and stories are converted to the MDX format
- build Sass with the now-canonical dart-sass instead of node-sass
- labels, inputs, textareas, and selects are selected by element name instead of a classname. If you have `.input--text` classnames on your elements, they should be removed

### Breaking

- developing or building bitstyles now requires `node v14.15.5` or higher
- all `object`-level classes are now `atoms`. Classnames have therefore changed, you’ll need to update all uses of those classnames
- `layout`-level classes have become either atoms or utility classes. As the classnames have changed, you’ll need to update all instances where you use those classes
- `.u-no-margin` and `.u-no-padding` have become `.u-margin-0` and `.u-padding-0` respectively
- `.u-visuallyhidden` has become `.u-sr-only`
- `.u-break-long-words` has become `.u-break-words`
- `.u-truncate-with-ellipsis` has become `.u-truncate`
- `.u-color--${color}` classes have become `.u-fg--${color}`
- `.u-background-color--${color}` classes have become `.u-bg--${color}`
- `.c-expander` has been removed
- spacing is now using a `s`, `m`, `l`, `xl` scale instead of `small`, `base`, `medium`, `large`. If you use the `spacing` function in your Sass, you will need to update to the new names (the sizes remain the same)
- the HTML grid system has been removed, and replaced with a CSS Grid-based system. All instances of `.l-width--${size}` and `l-grid__item` should be removed. The number of columns is now specified on the grid container (see the grid docs)
