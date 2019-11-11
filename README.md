# Bitstyles

[![Build Status](https://travis-ci.org/bitcrowd/bitstyles.svg?branch=master)](https://travis-ci.org/bitcrowd/bitstyles)
[![npm version](https://badge.fury.io/js/bitstyles.svg)](https://badge.fury.io/js/bitstyles)

A collection of tiny Sass CSS objects and helpers, Bitstyles is intended to be used by reasonably CSS- & HTML-aware frontend developers. This is no simple drop-in solution to skin a website, like [Bootstrap](http://getbootstrap.com) or [Foundation](http://foundation.zurb.com), rather a collection of focused object-classes, each defining just a single visual aspect. By using these simple building blocks in your HTML, it’s possible to construct complex layouts without repeating CSS.

For a certain set of elements in your UI, this strategy of applying multiple atomic classes eventually becomes untenable. This is generally for one of two reasons:
- the elements are very often-repeated, so using one class instead of many would reduce chances of inconsistency or errors e.g. buttons, cards
- the number of object classes on an element becomes unreadable in the HTML. This often also results in the appearance of the element becoming hard to reason about just from the HTML source, negating a large advantage of this approach in the first place.

For components which match these criteria it may make more sense to create component classes in your project to compose several of the simpler object classes (and whatever styling you may need on top). For this reason, all the object classes are also provided as Sass mixins — `@include` them in your own Sass components as needed.

Again unlike Bootstrap and Foundation, there are no javascript widgets or plugins included in Bitstyles.

See the [Bitcrowd frontend styleguide](https://github.com/bitcrowd/frontend) for more details of the technical principles on which Bitstyles is built. The TL;DR: it’s a variation of the BEMATOMICOOCSS methodology:
- BEM naming convention
- Atomic CSS-inspired, the object classes aim to provide most functionality needed to create whichever layout or UI you need. Trump classes create the exceptions that inevitably occur.

## Using Bitstyles in a project

Bitstyles can be added to your project via [npm](https://www.npmjs.com/).

```sh
npm install bitstyles --save
```

Once installed, you need to provide your sass installation with the path for bitstyles’ sass. This should be:

```
node_modules/bitstyles/scss
```

If you’re using gulp-sass, you can provide this path when `pipe`ing to sass:

```javascript
gulp.task('stylesheet', function(){
  return gulp.src('app/css/main.scss')
    .pipe(sass({
      includePaths: ['node_modules/bitstyles/scss']
    }).on('error', sass.logError));
}
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

If you’re using a version of Rails previous to 4, you must instead add the path to the asset pipeline in `config/application.rb`:

```ruby
config.assets.paths << Rails.root.join("node_modules", "bitstyles", "bitstyles")
```

### Install an unpublished version

If you need to install a version of bitstyles that’s so far unpublished (e.g. there’s a bugfix or feature that’s not in a published package yet), you can use the following:

```sh
npm install --save git+https://github.com/bitcrowd/bitstyles.git#master
```

### Importing the sass to your project

Copy the contents of the bitstyles manifest file (`bitstyles.scss`) to your project’s own sass manifest file (e.g. `app.scss`, `main.scss`) to make use of the entire library. Most likely you’ll not need everything in there, so comment-out the lines of objects you don’t need:

```scss
@import 'bitstyles/settings/global.setup';
@import 'bitstyles/settings/global.layout';
@import 'bitstyles/settings/global.breakpoints';
@import 'bitstyles/settings/global.animation';
@import 'bitstyles/settings/global.color-base';
@import 'bitstyles/settings/global.color-theme';
@import 'bitstyles/settings/global.typography';

// …

@import 'bitstyles/objects/icon';
// @import 'bitstyles/object/button';
// @import 'bitstyles/object/button-icon';
@import 'bitstyles/objects/absolute-center';
```

To change the css output by the library (e.g. standard margins, typographic scale, column count of the grid system…) you must override the variables used to build it. To do this declare any variables with your own values before including the bitstyles settings:

```scss
@import 'settings/icon-overrides';
@import 'settings/grid-overrides';

@import 'bitstyles/settings/global.setup';
@import 'bitstyles/settings/global.layout';
@import 'bitstyles/settings/global.breakpoints';
@import 'bitstyles/settings/global.animation';
@import 'bitstyles/settings/global.color-base';
@import 'bitstyles/settings/global.color-theme';
@import 'bitstyles/settings/global.typography';

@import 'bitstyles/objects/icon';
// @import 'bitstyles/object/button';
// @import 'bitstyles/object/button-icon';
@import 'bitstyles/objects/absolute-center';
```

For the complete list of variables you can override, look through the various files in the `bitstyles/settings/` folder.

## Contributing

Bitstyles requires `node v5.7.0` or higher. If you have [nvm](https://github.com/creationix/nvm) installed:

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
npm run watch
```

to recompile sass on every change.

For a single one-off build, run

```sh
npm run build
```

## Testing

Previously this project used a custom-made visual regression testing system. The dependencies used have sadly become abandoned in the years since, so they have been removed (encouraged by the Github security auditing feature that went live). There is an issue open to find a suitable replacement: #298.
