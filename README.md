# Bitstyles

A developing collection of CSS styles and helpers, for use in Bitcrowd projects.

## Using Bitstyles in a project

Bitstyles can be added to your project via [npm](https://www.npmjs.com/) or [Bower](http://bower.io/), as each project demands.

The source repository is currently private, and is not registered with the Bower
or npm registries. You will therefore need to install directly from a tagged
Github release (not from master), and you will need read access to the repo.

### Bower
```
$ bower install git@github.com:bitcrowd/bitstyles.git#v0.2.2-alpha --save
```

Once installed, you need to provide your sass installation with the path for bitstyles’ sass. This should be:

```
bower_components/bitstyles/stylesheets
```

If you’re using gulp-sass, you can provide this path when `pipe`ing to sass:

```javascript
gulp.task('stylesheet', function(){
  return gulp.src('app/css/main.scss')
    .pipe(sass({
      includePaths: ['bower_components/bitstyles/stylesheets']
    }).on('error', sass.logError));
}
```

If you’re using rails, you can add this path to the asset pipeline in `config/application.rb`

```ruby
config.assets.paths << 'bower_components/bitstyles/stylesheets'
```


### npm
```
$ npm install git+ssh://github.com/bitcrowd/bitstyles.git#v0.2.2-alpha --save
```

Once installed, you need to provide your sass installation with the path for bitstyles’ sass. This should be:

```
node_modules/bitstyles/stylesheets
```

If you’re using gulp-sass, you can provide this path when `pipe`ing to sass:

```javascript
gulp.task('stylesheet', function(){
  return gulp.src('app/css/main.scss')
    .pipe(sass({
      includePaths: ['node_modules/bitstyles/stylesheets']
    }).on('error', sass.logError));
}
```

If you’re using rails, you can add this path to the asset pipeline in `config/application.rb`

```ruby
config.assets.paths << 'node_modules/bitstyles/stylesheets'
```

### Importing the sass to your project

Copy the contents of the bitstyles manifest file (`bitstyles.scss`) to your project’s own sass manifest file (e.g. `app.scss`, `main.scss`) to make use of the entire library. Most likely you’ll not need everything in there, so comment-out or delete the lines of objects you don’t need. If there is a corresponding settings file for the object, be sure to comment that out too:

```scss
@import 'settings/icon';
// @import 'settings/button';
// @import 'settings/button--icon';
@import 'settings/grid';

// …

@import 'objects/icon';
// @import 'object/button';
@import 'objects/grid';
```

To change the css output by the library (e.g. standard margins, typographic scale, column count of the grid system…) you must override the variables used to build it. To do this declare any variables with your own values before including the bitstyles settings:

```scss
@import 'settings/icon-overrides';
@import 'settings/grid-overrides';

@import 'settings/icon';
// @import 'settings/button';
// @import 'settings/button--icon';
@import 'settings/grid';

@import 'objects/icon';
// @import 'object/button';
@import 'objects/grid';
```

For the complete list of varables you can override, look through the various files in the `stylesheets/settings/` folder.

## Developing Bitstyles
Bitstyles requires `node v5.7.0`. If you have [nvm](https://github.com/creationix/nvm) installed:

```
nvm use
```
will switch to the correct version of nodejs.

Clone this repository, `cd` into the folder created, then install dependencies:
```
npm install
```

### Build
To ensure your changes do not break the build, run

```gulp watch```

to recompile & lint sass on every change.

## Testing
### Installation
CasperJS & PhantomJS need to be installed globally:

```
npm install -g phantomjs casperjs
```
everything else you need is installed with
```
npm install
```

### Running
The project uses a visual regression testing system called [BackstopJS](https://garris.github.io/BackstopJS/) to compare screenshots of each object before & after changes are made.

After starting the styleguide server (and leaving it running):
```
gulp styleguide
```
Create the initial screenshots:
```
npm run test:build
```
Then each time you are ready to create a PR, run the tests to compare against the initial reference screenshots:
```
npm run test:run
```
Short results from the comparison will be displayed on the command line, more detail is available at [http://localhost:3001](http://localhost:3001) which should open automatically.
