# Bitstyles

[![npm version](https://badge.fury.io/js/bitstyles.svg)](https://badge.fury.io/js/bitstyles)
[![bower version](https://badge.fury.io/bo/bitstyles.svg)](https://badge.fury.io/bo/bitstyles)
[![Gem Version](https://badge.fury.io/rb/bitstyles.svg)](https://badge.fury.io/rb/bitstyles)

A developing collection of CSS styles and helpers, for use in Bitcrowd projects.

## Using Bitstyles in a project

Bitstyles can be added to your project via [npm](https://www.npmjs.com/) or [Bower](http://bower.io/), as each project demands.

The source repository is currently private, and is not registered with the Bower
or npm registries. You will therefore need to install directly from a tagged
Github release (not from master), and you will need read access to the repo.

### Bower
```sh
bower install git@github.com:bitcrowd/bitstyles.git#0.7.5 --save
```

Once installed, you need to provide your sass installation with the path for bitstyles’ sass. This should be:

```
bower_components/bitstyles/scss
```

If you’re using gulp-sass, you can provide this path when `pipe`ing to sass:

```javascript
gulp.task('stylesheet', function(){
  return gulp.src('app/css/main.scss')
    .pipe(sass({
      includePaths: ['bower_components/bitstyles/scss']
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
Rails.application.config.assets.paths << Rails.root.join("bower_components", "bitstyles", "bitstyles")
```

If you’re using a version of Rails previous to 4, you must instead add the path to the asset pipeline in `config/application.rb`:

```ruby
config.assets.paths << Rails.root.join("bower_components", "bitstyles", "bitstyles")
```

### npm
```sh
npm install git+ssh://github.com/bitcrowd/bitstyles.git#0.7.5 --save
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

### Rails gem

Add this line to your application's Gemfile:

```ruby
gem 'bitstyles'
```

And then execute:
```sh
bundle
```

Or install it yourself as:
```sh
gem install bitstyles
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

## Developing Bitstyles
Bitstyles requires `node v5.7.0`. If you have [nvm](https://github.com/creationix/nvm) installed:

```sh
nvm use
```
will switch to the correct version of nodejs.

Clone this repository, `cd` into the folder created, then install dependencies:

```sh
npm install
```

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
### Installation
CasperJS, PhantomJS, & BackstopJS all need to be installed globally:

```sh
npm install -g phantomjs casperjs backstopjs
```

### Run tests
The project uses the visual regression testing system [BackstopJS](https://garris.github.io/BackstopJS/) to compare screenshots of each object before & after changes are made. For existing objects, if there is no visual difference between the reference images and the newly-generated images, your changes are good. For new objects, create new reference images (see below) and commit them to the repo.

#### Existing objects
If you haven’t added a new object to the `backstop.json` file, you can simply run the tests against the already-existing reference images:

Start the styleguide server and leave it running:

```sh
npm run styleguide
```

To test your changes against the known-good reference images run the tests:

```sh
npm run test
```

Short results from the comparison will be displayed on the command line, more detail is available from the in-browser report:

```sh
backstop openReport
```

Then go to [http://localhost:3001](http://localhost:3001).

### Before you create your PR

Start up the styleguide (see the section below on testing for more information on this):

```sh
npm run styleguide
```

…then run the checks:

```sh
npm run checks
```

Once all tests pass, you’re good to go.

#### New objects

If you add new object scenarios to the `backstop.json`, backstop will complain if you try to run these tests without creating reference images for them.

Start the styleguide server:

```sh
npm run styleguide
```

Then recreate the reference images:

```sh
npm run test:build
```

Check the new reference images match what you expect, then commit them and you’re done.
