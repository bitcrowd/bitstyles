# Bitstyles

[![Build Status](https://travis-ci.org/bitcrowd/bitstyles.svg?branch=master)](https://travis-ci.org/bitcrowd/bitstyles)
[![npm version](https://badge.fury.io/js/bitstyles.svg)](https://badge.fury.io/js/bitstyles)

Bitstyles is a collection of tiny Sass CSS objects and helpers, intended to be used by reasonably CSS- & HTML-aware frontend developers. This is no simple drop-in solution to skin a website, rather a collection of focused object-classes, each defining just a single visual aspect. By using these simple building blocks in your HTML, it’s possible to construct complex layouts without repeating CSS.

There is a layer of more complex components built using these low-level classes — see the `UI` layer in the documentation linked below — that provides examples of many common structures needed for admin interfaces. These are suitable for less UI-focused developers, and are copy- & pasteable into any project that uses bitstyles. For those using the [elixir phoenix framework](https://www.phoenixframework.org), there is also [BitstylesPhoenix](https://github.com/bitcrowd/bitstyles_phoenix), which provides helpers for generating the HTML structure for many of the UI components.

## Documentation

For the full documentation of each class, with examples, visit [https://bitcrowd.github.io/bitstyles/](https://bitcrowd.github.io/bitstyles/).

## Using Bitstyles

Bitstyles can be added to your project via [npm](https://www.npmjs.com/).

```sh
yarn add bitstyles
```

Once installed, you need to provide your sass installation with the path for bitstyles’ sass. This should be:

```
node_modules/bitstyles/scss
```

### Importing the styles

For the simplest case where you don’t need to selectively import modules, you can import bitstyles and be done:

```scss
@use '~bitstyles/scss/bitstyles';
```

The old style is still supported, so if you’re not ready for `@use`:

```scss
@import '~bitstyles/scss/bitstyles';
```

### Overrides

It’s very likely that you’ll need to set your own colors, fonts, and spacing.

For the complete list of global variables you can override, look through the files in the `bitstyles/settings/` folder.

Each base object, atom, molecule, organism, and utility class also have their own variables that can be overridden. They’re found in the `_settings.scss` file in the respective folder.

#### `@use` ing the whole library

Assuming you’re ready to use `@use` to build your Sass, and you include the whole library, you can override variables as part of your `@use` statement.

The name of the variable will be prefixed with the name of the module. For the global settings that will be the filename without extensions or underscores e.g. `color-base-`, `layout-`. For all other CSS (atoms, organisms, and utility classes), use the name of the atom or utility e.g. `margin-`.

```scss
@use 'bitstyles' with (
  $color-base-black: #f00,
  $margin-breakpoints: (
    'xl',
    's',
  )
);
```

#### `@use` ing each part of the library

You might want to selectively include only the parts of the library you need in order to keep the bundle size down. If you’re ready to use `@use`, pass your overrides at the same time using `with`. Note there’s no need to prefix the variable names with anything.

```scss
// …

@use 'bitstyles/utilities/margin' with (
  $breakpoints: (
    'xl',
  )
);

// …
```

#### `@import` ing each part of the library

If you’re using `@import`, you can still override settings and selectively include each part of bitstyles. Do this by importing your variables before you import bitstyles:

```scss
$bitstyles-color-base-black: #f00;
$bitstyles-margin-breakpoints: ('xl', 's');

// …

@import 'bitstyles/settings/animation';
@import 'bitstyles/settings/breakpoints';

// …
```

The name of the variable you want to override must be prefixed with `bitstyles-` followed by the name of the module. For the global settings that name will be the filename without extensions or underscores e.g. `$bitstyles-color-base`. For all other CSS (atoms, organisms, and utility classes), use the name of the atom or utility e.g. `$bitstyles-margin-`.

### `@import` ing the whole library

In the same way, you can use `@import` to import the whole library as one, and still override the variables used.

```scss
$bitstyles-color-base-black: #f00;
$bitstyles-margin-breakpoints: ('xl', 's');

// …

@import 'bitstyles';
```

The name of the variable you want to override must be prefixed with `bitstyles-` followed by the name of the module. For the global settings that name will be the filename without extensions or underscores e.g. `color-base`. For all other CSS (atoms, organisms, and utility classes), use the name of the atom or utility e.g. `margin-`.

#### Adding your own components

When adding your own custom component CSS (i.e. not a component built using the utility classes) the point at which you import it is important, because CSS is a source order-dependent language.

1. Duplicate the contents of the bitstyles manifest file (`bitstyles.scss`) to your project’s own sass manifest file (e.g. `app.scss`, `main.scss`) to make use of the entire library. Optionally, if you’ll not need all the components in there, comment-out the lines of atoms, molecules and organisms you don’t need:

   ```scss
   @import 'bitstyles/settings/all';

   // …

   @import 'bitstyles/atoms/icon/';
   // @import 'bitstyles/atoms/button/';
   // @import 'bitstyles/atoms/button-icon/';
   @import 'bitstyles/atoms/absolute-center/';
   ```

1. Import your new CSS in one of the component sections (atoms, molecules, or organisms) to preserve the source order, with the utility classes at the end so they’ll still override the CSS that comes before them:.

   ```scss
   @import 'bitstyles/settings/all';

   // Atoms
   /////////////////////////////////

   @import 'bitstyles/atoms/icon/';
   @import 'bitstyles/atoms/button/';

   //  …

   @import 'local/atoms/my-new-atom';

   // Organisms
   /////////////////////////////////

   @import 'bitstyles/organisms/modal/';
   @import 'bitstyles/organisms/navbar/';

   // …

   @import 'local/organisms/my-new-organism';

   // Utilities
   /////////////////////////////////
   ```

## Contributing

Bitstyles requires `node v14.16.0` or higher. If you have [nvm](https://github.com/creationix/nvm) installed:

```sh
nvm use
```

will switch to the correct version of nodejs.

Clone this repository, `cd` into the folder created, then install dependencies:

```sh
git clone https://github.com/bitcrowd/bitstyles.git
cd bitstyles
yarn
```

It is recommended to use [yarn](https://yarnpkg.com/en/docs/install) instead of `npm install` to ensure version consistency across dependencies.

### Linting

This project uses [stylelint](https://github.com/stylelint/stylelint) to ensure code consistency. All PRs should be checked before merging:

```sh
yarn lint
```

### Build

To ensure your changes do not break the build, run

```sh
yarn watch
```

to recompile sass on every change.

For a single one-off build, run

```sh
yarn build
```

## Component library

We use [storybookjs](https://storybook.js.org) to provide a single navigable library of the classes in bitstyles, and the associated documentation.

Run:

```sh
yarn storybook
```

Storybook will automatically open in a new tab in your default browser on a random port.

## Deploying storybook documentation

The storybook documentation is automatically deployed when a branch is merged to `main`.

# Font license

The Nunito webfont is included in Bitstyles, and is licensed under the (SIL Open Font License, 1.1)[http://scripts.sil.org/OFL]. Copyright 2014 The Nunito Project Authors (https://github.com/googlefonts/nunito).
