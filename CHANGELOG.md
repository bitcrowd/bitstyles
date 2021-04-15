# [1.1.0] - 2021-04-15

## Added

- New component in UI layer: sidebar
- Added this changelog

## Changed

- [Docs] Improved documentation: added links to classes used in the storybook examples
- [Docs] Navbar examples are now in iframes of fixed height, so the examples are clearly visible in docs view
- Webfonts are now included in the release
- Updated the modal component visual styles, and added examples for dialogs, alerts, and informational modals
- Breadcrumbs & pagination components are now wrapped in labelled `<nav>` elements
- Imports of Sass partials are now alphabetized within each layer
- Navbar component (largescreen version) now scrolls instead of wrapping when the links inside take up more space than available

## Fixed

- `a-button--nav` and `a-button--nav-large` are no longer centered

## Breaking

- Node version bumped to LTS (14.16.0)

# [1.0.6] - 2021-03-31

## Changed

- The releases now contain compiled CSS. The CSS is also available at [https://cdn.jsdelivr.net/npm/bitstyles@1.0.6/build/bitstyles.css](https://cdn.jsdelivr.net/npm/bitstyles@1.0.6/build/bitstyles.css). [#436] Add npmignore file (#437).

# [1.0.5] - 2021-03-29

## Changed

- Adds a complex multi-section form example, and a better layout for simple forms. [#429] Improve form examples
- Breadcrumb UI component now has its arrow icons to the right of each breadcrumb-item. [#431] Breadcrumb arrows to the right
- `<legend>` elements no longer have padding as default
- The `.a-bordered-header` atom is now left-aligned rather than centered

## Fixed

- Selects, buttons, and inputs all have the same height, and share colors

## Breaking

- `.u-grid` classes no longer set `grid-gap`. Responsibility for `grid-gap` has been moved to `.u-gap`. You’ll need to add relevant grid-gap classes to your grid elements. Adding `.u-gap-m` to all your grid containers will result in an equivalent layout as before this change

# [1.0.4] - 2021-03-17

## Added

- A filter component built using the existing dropdown and checkboxes
- A filter component for applying free-text filters
- An new icon page in our documentation, giving examples of all the icons used in our documentation

## Changed

- `.a-button--danger` no longer overrides base colors (only does so on hover/focus etc.), so you can use it in conjunction with other button types to make them “dangerous”
- All icons in our documentation are now built with symbols from a centralised SVG file using `<use>`
- All our button types now only alter the base button’s `border-color`, not the shorthand `border`, to ensure equal heights of buttons
- `.a-button--nav` now responds to `aria-expanded`, so it can be used for dropdowns
- `.a-button--tab` now responds to `aria-current`, so a tab-like interface can be presented when the tab switching involves navigating to a new URL
- `.a-button--ui` now responds to `aria-current`
- buttons now all use regular font-weight

## Breaking

- The `overflow-x` and `overflow-y` mixins no longer set the max width and height respectively. If you were making direct use of the mixins, you’ll need to add max widths or heights to your CSS, as needed.

# [1.0.3] - 2021-03-15

## Added

- `.o-notification-center` component, that handles layout of notifications in the top right of the viewport, overlaying other content
- `.a-flash` component to be used for displaying global updates at the top of the viewport, or at the top of a form, in the document flow
- Negative margin utility classes `.u-margin-neg-#{$size}`

## Changed

- Most of our button types now only alter the base button’s `border-color`, not the shorthand `border`, to ensure equal heights of buttons
- Input elements now only alter the base style’s `border-color`, not the shorthand `border`, to ensure equal heights and consistent appearance
- Simplifies the way we import webfonts, and allows easier setup and overriding, using a more explicit `$bitstyles-webfont-variants` nested map. Filenames no longer need to match the previous format, though it’s advised

# [1.0.2] - 2021-03-11

## Added

- `.u-border` utility classes
- Storybook documentation now includes the `a11y-addon` for in-browser checking of some a11y low-hanging fruit
- `select` elements can now display different border-color, background-color etc when they are invalid. There are examples showing how to correctly markup invalid `select`s (it is quite specific due to browser implementations)
- There’s a new section-heading component in the documentation, with variants containing buttons
- Flex and box-alignment classes are now available at various breakpoints

## Changed

- `.a-button--tab` indicator color is now set by a specific `$bitstyles-button-tab-border-color` sass variable instead of using the border variable. Borders can now be set on `a-button--tab`s, whereas before they could not (by default they’re all transparent, so there will be no visual change)
- Webfonts are now imported using a base URL and several variants specified in $bitstyles-webfont-variants. The filenames of the webfont files need to match the convention `${base-url}-${variant}.${woff|woff2}`
- As per the current state of Assistive Technology’s interpretation of forms, examples of select element usage now place the label as sibling to (not parent of) the select. If you were using the previous structure, please switch

# [1.0.1] - 2021-03-04

## Added

- `.u-round` for applying rounded corners to elements
- `.o-ui-group` for visually binding several closely-related interactive elements (buttons or inputs)
- `.a-button--ui`, for buttons that are not the primary action of a screen
- `.a-card` is now available at the `m` breakpoint
- Example form layouts for login & signup flows
- `.u-grid` and variants are now available at `l` breakpoint
- `.u-padding` and variants are now available at various breakpoints

## Changed

- Specifies the newly-published documentation as our homepage

## Breaking

- `.u-list-reset` is replaced with `.a-list-reset`. You’ll need to update your usage, and check instances where you use other classes on the same element, as the location of this class in the source order has changed

# [1.0.0] - 2021-03-04

## Added

- new `.o-navbar` organism
- new `.o-table` organism
- new `.a-badge` atom
- new `.a-avatar` atom
- new `.a-dropdown` (menu) atom
- new collection of button types
- new `.a-card` atom for sectioning or highlighting content
- new `.a-dl` atom

## Changed

- updates storybook one major version
- all documentation and stories are converted to the MDX format
- build Sass with the now-canonical dart-sass instead of node-sass
- labels, inputs, textareas, and selects are selected by element name instead of a classname. If you have `.input--text` classnames on your elements, they should be removed

## Breaking

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
