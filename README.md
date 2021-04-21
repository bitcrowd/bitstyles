# Bitstyles

[![Build Status](https://travis-ci.org/bitcrowd/bitstyles.svg?branch=master)](https://travis-ci.org/bitcrowd/bitstyles)
[![npm version](https://badge.fury.io/js/bitstyles.svg)](https://badge.fury.io/js/bitstyles)

Bitstyles is a collection of tiny Sass CSS objects and helpers, intended to be used by reasonably CSS- & HTML-aware frontend developers. This is no simple drop-in solution to skin a website, rather a collection of focused object-classes, each defining just a single visual aspect. By using these simple building blocks in your HTML, it’s possible to construct complex layouts without repeating CSS.

There is a layer of more complex components built using the low-level classes — see the `UI` layer in the documentation linked above — that provides examples of many common structures needed for admin interfaces.

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

If you’re using Rails 4+, you can add this path to the asset pipeline in `config/initializers/assets.rb` where you see the commmented-out lines

```ruby
# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path
```

Add the following:

```ruby
Rails.application.config.assets.paths << Rails.root.join("node_modules", "bitstyles", "bitstyles")
```

### Importing the styles

For the simplest case where you don’t need to add any CSS component classes, you can import bitstyles and be done:

```scss
@import '~bitstyles/scss/bitstyles.scss';
```

#### Override variables

It’s very likely that you’ll need to set your own colors and fonts. Do this by importing your variables before you import bitstyles:

```scss
@import 'path/to/local-overrides.scss';
@import '~bitstyles/scss/bitstyles.scss';
```

For the complete list of global variables you can override, look through the various files in the `bitstyles/settings/` folder.

Each atom, molecule, organism, and utility class also have their own variables that can be overridden, to be found in the `settings.scss` file in the respective component’s folder.

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
