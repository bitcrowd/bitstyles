# Changelog

## Unreleased

### Changed

- Buttons now show their `pressed` state when they have `aria-expanded='true'`, so it’s usable with dropdowns, and other show/hide UI.
- Colors in the default configuration have been refreshed following our new design system. If you wish to retain the old color scheme, you can copy the configuration from older versions. You may need to also update the settings for any components you’re using from bitstyles to use the colors you have defined, in cases where the components expect the new colors. If you were already overriding the color palette, you don’t need to do anything (though, see next point on naming).
- The naming scheme for color variations has changed. If you’re using the default color configuration, update the color names when you use either `palette.get()` or the equivalent CSS Custom Properties:
  - `lightest` to `light-3`
  - `lighter` to `light-2`
  - `light` to `light-1`
  - `dark` to `dark-1`
  - `darker` to `dark-2`
  - `darkest` to `dark-3`
- The sizing scale now spans from `s7` (smallest) to `l7` (largest), with `m` being the mid point. If you change the names used in the sizing scale in your configuration, you may need to override some instances of the new size names where they are used in the default configuration of bitstyles. If you use the default configuration, and are using the `size.get()` Sass helper or one of the padding & margin utility classes, you’ll need to update those to use the new sizes (pick whatever is closest in size).
- Default visual design for buttons has been updated — colors have been refreshed utilizing the new palette, and we’ve added a new `outline` button that has a border. The `large` shape variant has been removed — the sizes are now `default`, `small`, and `x-small`. If you were overriding the default configuration for buttons, you may see no change.
- New atoms/badge component, an overhaul of the existing component that you’ll need to update your codebase to continue using. It also features a new visual design. The colors for each variant are created using the theming system, meaning that buttons inside a badge have their colors fit the color of the badge. If you were using badges without customization, the only thing that needs to change in your component markup is that the color variant is now specified using `class="a-badge" data-theme="variant"` instead of with the modifier class `class="a-badge a-badge--variant"`. The same variants exist (`grayscale`, `brand-1`, `brand-2`, `positive`, `warning`, `danger`). See documentation for a guide on how to customize the variants.
- `.a-badge__button` has been renamed `.a-badge__prepend` to reflect that it appears before the main content of the badge, and that it could not be a button.
- Default configuration for shadows design tokens now includes shadows for `brand-1`, `brand-1-center`, `brand-2`, `brand-2-center`, `grayscale`, `positive`, `warning`, and `danger`. The `default` shadow has been removed — if you were making use of `shadows.get('default')`, rename that to `shadows.get('brand-1')`. Similarly for either of the utility classes `u-shadow-default` is now `u-shadow-brand-1`, and `u-drop-shadow-default` is now `u-drop-shadow-brand-1`.
- Updated the default configuration for typography. If you want to keep the old typographic scale (font-sizes and line-heights), you can re-instate the old configuration.
- Default visual appearance of Atoms/Dropdown component has been updated. If you were already overriding this, you may see no difference
- Bitstyles can no longer be imported using Sass’s `@import` statements — you’ll need to either switch to using `@use` statements, or use bitstyles v5.0.1.
- Default visual design for links (anchor elements and the `.a-link` class) has been updated. If you were overriding the default configuration for links, you may see no change.
- New atoms/flash component, an overhaul of the existing component that you’ll need to update your codebase to continue using. The colors for each variant are created using the theming system, meaning that buttons inside can have their colors fit the color of the badge. If you were using flashes without customization, the only thing that needs to change in your component markup is that the color variant is now specified using `class="a-flash" data-theme="variant"` instead of with the modifier class `class="a-flash a-flash--variant"`. The same variants exist (`grayscale`, `brand-1`, `positive`, `warning`, `danger`). See documentation for a guide on how to customize the variants.
- Renames the `.o-ui-group` component to `.o-joined-ui`, and removes the need for extra child classes on your elements. You’ll need to replace all instances of `.o-ui-group` with `o-joined-ui`, and remove all instances of `.o-ui-group__item`, `.o-ui-group__first`, and `.o-ui-group__last`. Any instances of `u-border-radius-0` classes on these components must also be removed, as this is now handled in pure CSS.
- The separate helper functions for design tokens have been replaced with a single function `design-token.get()`, found in `tools/design-token`. If you were using any of these functions in your codebase, you’ll need to replace them:
  - `size.get($size-name)` to `design-token.get('size', $size-name)`
  - `palette.get($color-name)` to `design-token.get('color', $color-name)`
  - `line-height.get($line-height-name)` to `design-token.get('line-height', $line-height-name)`
  - `font-size.get($font-size-name)` to `design-token.get('font-size', $font-size-name)`
  - `shadows.get($shadow-name)` to `design-token.get('shadow', $shadow-name)`
  - `custom-property.get()` to `design-token.get()`
- Updated design for `.a-skip-link`. If you were overriding the appearance before, the only difference you’ll notice is that the skip-link now has a focus indicator, and a hover state. There are extra Sass variables available for customizing the hover state — see the docs for details.

### Added

- The storybook now includes the `storybook-zeplin` plugin, for which you’ll need to provide your Zeplin personal access token, otherwise the plugin will not work. No other functionality will be affected.
- The atoms/badge component is now available with a `small` size variant.
- It is now possible to import bitstyles on a per-layer basis, instead of per-module or all at once. It is still possible to override all modules inside each layer in the normal way.
- There are now design tokens as `design-tokens/focus` to describe a consistent `:focus` appearance, that are currently used in `base/anchor/`, `atoms/buttons`, and `atoms/links`.
- Anchor elements and `atoms/link` components now have a disabled state, applied using the `aria-disabled` attribute.
- A new layout component at `atoms/switcher`, that lays out its children in a horizontal row with consistent spacing between children. The layout switches to a vertical stack once the width of the component passes below a threshold, or the number of children goes over a limit.

## [[5.0.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v5.0.0) - 2023-01-03

### Fixed

- Radios and checkboxes no longer get distorted when placed in a flex layout, and the sibling content has a min-content width larger than the available space

### Added

- New helper function `custom-property.get()` for generating names of CSS custom properties that respect the namespace and layer-prefix configuration.
- Most design tokens are now output as CSS Custom Properties in a `:root` block. All are prefixed with `bs` in the default configuration (customize that using `setup.$custom-property-namespace`), with names matching their Sass variable e.g. `--bs-color-brand-1-base`, `--bs-color-brand-1-light`, `--bs-size-xs`, `--bs-size-s`.
- Most design tokens are now available in JS environments by importing the relevant file from `exports/`. See the documentation for each set of design tokens for more details.
- Use `setup.$viewport-elements` to define which elements should be considered equal to the viewport in size. These elements’ heights will match the viewport (including any variable sizing on mobile browsers). Make sure to add a selector for any wrapper elements your framework may be wrapping around your app/content.
- Adds a utility class for the `width` property. Defaults to providing `width: 100%` under the name `u-width-full`. This can be customized using `$bitstyles-width-values` and `$bitstyles-width-breakpoints`.
- Adds utility classes to specify white-space property. Defaults to just `nowrap`, and is configurable with `$bitstyles-white-space-values`, and `$bitstyles-white-space-breakpoints`.
- Adds a new set of utility classes for specifying the `text-decoration-line` property. Default configuration gives `underline` and `line-through` as values, and is not available at any breakpoints. This can be configured using `$values` and `$breakpoints`.
- Adds utility classes for specifying `justify-self` and `justify-items`.
- A new utility class `u-list` to specify the `list-style-type` property. Default values available are `none`, `decimal`, `disc`. Configuration is possible using `$bitstyles-list-values` and `$bitstyles-list-breakpoints`.
- Two generators for button variants: `button.colors($colors)` allows variations of color properties (color, background-color, shadow, border-color, etc); `button.sizes.($sizes)` allows variations of size- and shape-related properties (padding, border-width, border-radius, font-size etc.).

### Changed

- `properties.join-with-dashes` is now `string.join-with-dashes`, and does not accept an `$at-prefix`. If you were using this for generating CSS property names, or some other dash-separated string, you need to import `tools/string` instead of `tools/properties`, and update the namespace at the point of usage from `properties.join-with-dashes` to `string.join-with-dashes`. If you were using the `$at-prefix`, you should switch to using `classname.get()`.
- Names of CSS custom properties used for styling the icon buttons inside badge components have been renamed from `--button-fg`, `--button-bg`, `--button-fg-hover`, `--button-bg-hover` to `--bs-a-button-color`, `--bs-a-button-background-color`, `--bs-a-button-color-hover`, `--bs-a-button-background-color-hover` respectively. If you were using these variables in your own codebase, you’ll need to update the names.
- Order of line-heights in `settings/typography.$line-heights` is now in order of size. If you were using the utility classes based on these values, line-heights `1` and `2` have swapped places, as have `4` and `5`. If you were using those values with `line-height.get()`, you’ll need to change the value you request to match. If you were using the utility classes `u-line-height`, you’ll need to rename `u-line-height-1` to `u-line-height-2`, `u-line-height-2` to `u-line-height-1`, `u-line-height-4` to `u-line-height-5`, and `u-line-height-5` to `u-line-height-4`.
- `settings/typography.$line-height-base` has been removed. Use `tools/line-height.get('5')` instead.
- `<body>` is now given `height: stretch` instead of 100%. In all likelihood, this is what was intended by the previous declaration of `height: 100%`, so you shouldn’t need to change anything.
- The variables for the `justify` utility class (which specifies `justify-content`) have been renamed to from `$values` to `$content-values`, and `$breakpoints` to `$content-breakpoints`. If you were overriding these variables, you’ll need to rename them.
- The variables for the `utilities/flex` classes have been updated to match the pattern used by the `utilities/justify` classes. `$direction` becomes `$direction-values`, `$wrap` becomes `$wrap-values`, `$grow` becomes `$grow-values`, and `$shrink` becomes `$shrink-values`. The single `$breakpoints` variable has been broken out into individual variables for specifying breakpoints for each property: `$direction-breakpoints`, `$wrap-breakpoints`, `$grow-breakpoints`, and `$shrink-breakpoints`. If you were overriding any of these variables, you’ll need to rename them.
- The following mixins have been moved from `tools/` to `mixins/`: `aspect-ratio`, `clearfix`, `link`, `object-cover`, `truncate`.
- Removes the class `a-list-reset`. Replace uses of this class with `u-list-none`.
- Removes existing button types: `icon`, `icon-reversed`, `menu`, `mode`, `nav`, `nav-large`, `ui`. These are replaced with buttons variants of size & shape, and of color, which can be combined to create a similar set of visual appearances: `small`, `medium`, `large`, `square`, `round`, and `primary`, `secondary`, `transparent`, `danger`, `tab`. You’ll need to update any button classes you were using to use the new classes in combination, or use the button variant `color()` and `size()` generators in `tools/button` to recreate the button classes you were previously using.

### Breaking

- Removes the following mixins: `list-reset`, `absolute-center`, `absolute-cover`, `break-text`, `icon`, `list-inline`, `sr-only`, and `vertical-center`.
- All `ul` elements have their margins & padding removed. If you need that for some instances, use the `u-margin` or `u-padding` utility classes.

## [[5.0.0-alpha-1]](https://github.com/bitcrowd/bitstyles/releases/tag/v5.0.0-alpha) - 2022-09-12

### Added

- A new variable `setup.$no-media-query` is available. In case you use the name `no-mq` for one of your breakpoints, you can change this value to avoid conflict
- The `properties.join-with-dashes()` function now handles adding the breakpoint suffix with a preceding `@` symbol, when you pass `$at-suffix`
- `media-query.get()` will now output the content block you pass it without a media-query wrapping them, if the media-query name matches `settings.no-media-query`. This is useful for outputing base CSS with media-query wrapped CSS in one loop
- The `overflow` utility classes can now be output at breakpoints, configurable with the `$bitstyles-overflow-breakpoints` variable
- A new typography configuration `typography.$line-heights` is available with additional setup config for line-heights.
- Renamed `typography-responsive.$font-sizes` to `typography-responsive.$typographic-scale`, which now expects the font-size for each to be paired with line-height
- A new helper function `base-palette.get()` that returns colors from your base palette, to be used when setting up your color palette
- Classname layer prefixes for indicating whether a class is at atom/molecule/organism/utility level can now be configured or even removed by overriding `setup.$layer-prefixes`.
- New helper function `classname.get()` for generating classnames that respect the namespace and layer-prefix configuration. If you were previously using `properties.join-with-dashes()` to generate classnames, you should migrate to using `classname.get()` instead.
- Added a new theming system, with the default configuration offering `default` and `dark` themes. These specify the `color` and `background-color` for the element to which they’re applied. The themes are available in Sass using `themes.get()`, which behaves similarly to `media-query.get()`.
- Button color variations are now configured per-theme. Default configuration provides colors for default and dark themes.

### Changed

- `typography.$font-sizes` now expects a single Sass map of font-sizes. This is the base set of design tokens for your font-sizes, from which the responsive typographic scale is created.
- Newly configured `line-height` utility classes to include the base `typography.$line-heights`
- The `output-responsive-font-sizes` mixin expects a map data structure which includes `font-size` and `line-height`. If you were using the mixin you would have to change the parameter passed.
- We now have a two-tier typography design token system. A single Sass map `$bitstyles-typography-font-sizes` is used to create the existing responsive typography system for `h1` – `h6` elements, and the corresponding `.u-h1` – `.u-h6` responsive typography utility classes. The responsive typography for the base heading elements and the corresponding utility classes is built on top of these base design tokens. To update, all your unique font-sizes should be defined in the base scale in `settings/typography`, then referenced using `font-size.get()` to build your responsive typography scale in `settings/typography-responsive`.
- The color palette generator in `tools/color` is renamed from `color.generate-palette` to `color.generate-scale`, and now produces a more evenly-spread range of colors, with more accurate saturation and hue than before
- By default there are now two tiers of color palettes — the one used in your codebase and in all bitstyles components (the “semantic palette”) is generated from a base palette. In the default configuration, this base palette is generated from the base colors provided. See [https://bitcrowd.github.io/bitstyles/?path=/docs/design-tokens-color-palette--page](https://bitcrowd.github.io/bitstyles/?path=/docs/design-tokens-color-palette--page) for details on customizing this.
- Default naming of color variants has switched from using numbers, to using meaningful names like `light`, `dark`, `base`. If you override the palette in your codebase, you may need to override the colors used by other bitstyles components
- Sizes scale naming has been updated to use to following convention `s`, `xs`, `2xs`, `3xs`, and `l`, `xl`, `2xl`, `3xl`. Any utility classnames in your codebase containing the sizes (e.g. `u-margin-xxs-bottom`, `u-padding-xxxl`) will need to be updated to use the new naming scheme (e.g. `u-margin-2xs-bottom`, `u-padding-3xl`). Any uses of `size.get()` in your codebase will need to be updated to use the new naming scheme.

### Fixed

- All classnames of atoms and organisms now correctly insert a minus character between the global namespace and the rest of the classname. If you were using `setup.$namespace`, you’ll need to update those classnames to include a minus e.g. `.namespacea-button` becomes `.namespace-a-button`
- Settings for `utilities/text` can now be overridden

## [[4.3.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v4.3.0) - 2022-05-25

### Added

- Adds utility classes for specifying inset — top/right/bottom/left CSS properties. Defaults to just classes specifying `0` for each, customizable using `$bitstyles-inset-values`, `$bitstyles-inset-directions`, and `$bitstyles-inset-breakpoints`
- Adds utility class to specify max-height property, with `100vh` and `stretch` as default values. Customizable using `$bitstyles-max-height-values` and `$bitstyles-max-height-breakpoints`
- `a-link` and `<a>` elements now have variables to specify the active state
- Position classes are now available for `static`, `absolute`, `fixed`, and `sticky`, as well as the existing `relative`. These classes are available at the `m` breakpoint by default, and are customizable using `$bitstyles-position-values`
- New `u-max-width` utility class, with `0` and `100vw` as default values. Customizable using `$bitstyles-max-width-values` and `$bitstyles-max-width-breakpoints`
- `u-line-height` class can now be configured using `$bitstyles-line-height-values` and `$bitstyles-line-height-breakpoints`

### Changed

- `properties.get-classname()` has been renamed to `properties.join-with-dashes()` to reflect its more generic usage. The list of strings passed as a parameter is renamed from `$classname-items` to `$string-items`. If you were using this function, rename the function call and the parameter (if using named parameters in your call)

### Fixed

- Prefixing of utility classnames with `setup.$namespace` is now working correctly, with the exception of line-height and the font-size utility classes. These will be done in another PR. If you were using namespacing, you’ll need to update the classnames for all utilities (apart from line-height & font-size) in your HTML to the correct format , with `-` dashes between each part of the name e.g. `.<namespace>-u-<classname>` instead of `.<namespace>u-<classname>`

## [[4.2.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v4.2.0) - 2022-02-09

### Added

- Configuration of the border-radius utility class is now possible: `$bitstyles-border-radius-values`, `$bitstyles-border-radius-breakpoints`, `$bitstyles-border-radius-directions`
- New `u-min-height` utility class
- `u-height` utility class is now configurable using `$bitstyles-height-values` and `$bitstyles-height-breakpoints`
- New `u-min-width` utility class
- New atom component `a-skip-link`, for skip-to-content links

### Breaking

- `u-round` classes have been renamed `u-border-radius`

## [[4.1.0]](https://github.com/bitcrowd/bitstyles/releases/tag/v4.1.0) - 2022-02-22

### Added

- New Sass map `$bitstyles-shadows-shadows` for holding global shadow design tokens as a Sass list, and a `shadows.get()` function for accessing them in your Sass
- New helper function `shadow.generate()` to generate multi-layered “natural” shadows based on the color and distances you give
- Two functions (`shadow.to-box-shadow()` and `shadow.to-drop-shadow()`) for translating those shadows (which are specified in Sass' list format) into either CSS `box-shadow` format, or CSS filter `drop-shadow` format. Not necessary for the shadows accessed using `shadows.get()`
- New `u-shadow` and `u-drop-shadow` utility classes to set box-shadows and drop-shadows respectively
- The smallscreen version of the Sidebar organism can now be positioned to the left or right side of the screen by overriding `$bitstyles-sidebar-small-location` (defaults to `left`)

### Fixed

- `u-bg` classes will now be output with the correct breakpoint suffix
- `$bitstyles-font-family-breakpoints` will now correctly output media-queries

### Changed

- Renames `tools/_directional-properties.scss` -> `tools/_properties.scss`, so any imports of those files will need to be updated to reflect that
- Renames `output-properties()` -> `output()`
- Renames `output-directional-properties()` -> `output-directional()`

### Breaking

- If you were overriding `bitstyles-padding-values` and providing your sizes nested inside a `positive` key, you will need to remove that, and provide the values directly e.g.

  ```scss
  $sizes: (
    'positive': (
      '0': 0,
      'xxs': size.get('xxs'),
      'xs': size.get('xs'),
      's': size.get('s'),
      'm': size.get('m'),
      'l': size.get('l'),
      'xl': size.get('xl'),
      'xxl': size.get('xxl'),
    ),
  );
  ```

  becomes

  ```scss
  $sizes: (
    '0': 0,
    'xxs': size.get('xxs'),
    'xs': size.get('xs'),
    's': size.get('s'),
    'm': size.get('m'),
    'l': size.get('l'),
    'xl': size.get('xl'),
    'xxl': size.get('xxl'),
  );
  ```

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

- All utility classes which had a double dash in their classname (`--`) now only have a single dash. You’ll need to rename all these classes to use single dashes e.g. `.u-bg--brand-1` becomes `.u-bg-brand-1`. The following classes are affected:
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
