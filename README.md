# Bitstyles

[![Build Status](https://travis-ci.org/bitcrowd/bitstyles.svg?branch=master)](https://travis-ci.org/bitcrowd/bitstyles)
[![npm version](https://badge.fury.io/js/bitstyles.svg)](https://badge.fury.io/js/bitstyles)

## Documentation

For the full documentation, visit [https://bitcrowd.github.io/bitstyles/](https://bitcrowd.github.io/bitstyles/).

A collection of tiny Sass CSS objects and helpers, Bitstyles is intended to be used by reasonably CSS- & HTML-aware frontend developers. This is no simple drop-in solution to skin a website, rather a collection of focused object-classes, each defining just a single visual aspect. By using these simple building blocks in your HTML, it’s possible to construct complex layouts without repeating CSS.

There is a layer of more complex components built using of the low-level classes — see the `UI` layer in the documentation linked above — that provides examples of many common structures needed for admin interfaces.

## Introduction

For a certain set of elements in your UI, the strategy of applying multiple atomic classes eventually becomes untenable. This is generally for one of two reasons:

- the elements are very often-repeated, so using one class instead of many would reduce chances of inconsistency or errors e.g. buttons, cards
- the number of object classes on an element becomes unreadable in the HTML. This often also results in the appearance of the element becoming hard to reason about just from the HTML source, negating a large advantage of this approach in the first place.

For components which match these criteria it may make more sense to create component classes in your project to compose several of the simpler object classes (and whatever styling you may need on top). For this reason, all the object classes are also provided as Sass mixins — `@include` them in your own Sass components as needed.

Again unlike Bootstrap and Foundation, there are no javascript widgets or plugins included in Bitstyles.

See the [Bitcrowd frontend styleguide](https://github.com/bitcrowd/frontend) for more details of the technical principles on which Bitstyles is built. The TL;DR: it’s a variation of the BEMATOMICOOCSS methodology:

- BEM naming convention
- Atomic CSS-inspired, the object classes aim to provide most functionality needed to create whichever layout or UI you need. Utility classes create the exceptions that inevitably occur.

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

### Importing the sass to your project

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

If you need to add your own custom component CSS (i.e. not a component built using the utility classes), you’ll need to insert your components in the middle of bitstyles. This is because CSS is a source order-dependent language.

First, copy the contents of the bitstyles manifest file (`bitstyles.scss`) to your project’s own sass manifest file (e.g. `app.scss`, `main.scss`) to make use of the entire library. Optionally, if you’ll not need all the components in there, comment-out the lines of atoms, molecules and organisms you don’t need:

```scss
@import 'bitstyles/settings/all';

// …

@import 'bitstyles/atoms/icon/';
// @import 'bitstyles/atoms/button/';
// @import 'bitstyles/atoms/button-icon/';
@import 'bitstyles/atoms/absolute-center/';
```

When you add your own components, import their CSS in one of the component sections — either atoms, molecules, or organisms. The source order is then preserved, and the utility classes will still override the CSS that comes before them:

```scss
@import 'bitstyles/settings/all';

// …

@import 'bitstyles/atoms/icon/';
@import 'bitstyles/atoms/button/';

//  …

@import 'local/atoms/my-new-atom';

@import 'bitstyles/organisms/modal/';
@import 'bitstyles/organisms/navbar/';

// …

@import 'local/organisms/my-new-organism';
```

## Contributing

Bitstyles requires `node v14.15.5` or higher. If you have [nvm](https://github.com/creationix/nvm) installed:

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

## Testing

Previously this project used a custom-made visual regression testing system. The dependencies used have sadly become abandoned in the years since, so they have been removed (encouraged by the Github security auditing feature that went live). There is an issue open to find a suitable replacement: #298.
