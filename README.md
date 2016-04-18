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
Clone this repository, `cd` into the folder created, then install dependencies:
```
npm install
```

### Build
To ensure your changes do not break the build, run
```
gulp watch
```
to recompile & lint the sass on every change.
