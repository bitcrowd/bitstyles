# Bitstyles

A developing collection of CSS styles and helpers, for use in Bitcrowd projects.

This will be included in projects using [Bower](http://bower.io/) or
[npm](https://www.npmjs.com/).

## Using Bitstyles in a project

Bitstyles can be added to your project via `npm` or `bower`, as each project demands.

The source repository is currently private, and is not registered with the Bower
or npm registries. You will therefore need to install directly from a tagged
Github release (not from master), and you will need read access to the repo.

### Bower
```
$ bower install git@github.com:bitcrowd/bitstyles.git#v0.1.2-alpha --save
```

### npm
```
$ npm install git+ssh://github.com/bitcrowd/bitstyles.git#v0.1.2-alpha --save
```

Once installed, import the bitstyles manifest file your project’s sass manifest file (e.g. `app.scss`, `main.scss`):

```
@import 'node_modules/bitstyles/stylesheets/bitstyles';
```

To change the css output by the library (e.g. standard margins, typographic scale, column count of the grid system…) you must override the variables used to build it. To do this, first declare any variables with your own values, before then including the bitstyles manifest:

```
@import 'app/stylesheets/settings/bitstyles-overrides';
@import 'node_modules/bitstyles/stylesheets/bitstyles';
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
