/* eslint-disable prefer-arrow-callback */

'use strict';

const gulp = require('gulp');
const styleguide = require('sc5-styleguide');
const spawn = require('child_process').spawn;
const eslint = require('gulp-eslint');
const postcss = require('gulp-postcss');
const reporter = require('postcss-reporter');
const postcssReporter = reporter({
  clearMessages: true,
  throwError: true
});
const styleguideOutputPath = 'styleguide';
const syntaxScss = require('postcss-scss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const fs = require('fs');
const graph = require('gulp-specificity-graph');
const Parkerstats = require('parker');
const ParkerstatsMetrics = require('parker/metrics/All');
const opener = require('opener');

gulp.task('build', function compileCss() {
  return gulp.src('bitstyles/bitstyles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        './node_modules/'
      ]
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({ browsers: ['last 2 versions'] }),
      cssnano({ safe: true }),
      postcssReporter
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/'));
});

gulp.task('lint:scss', function lintScss() {
  /* eslint-disable prefer-template */
  const ns = '#{\\$bitstyles-namespace}(l-|c-|o-|t-|is-|has-|js-)';
  const word = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
  const element = '(?:__' + word + ')?';
  const modifier = '(?:_' + word + '){0,2}';
  const attribute = '(?:\\[.+\\])?';
  const stylelint = require('stylelint');
  const bemlint = require('postcss-bem-linter')({
    componentName: /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
    // Double-escaping required!
    componentSelectors: '^\\.' + ns + '{componentName}' + element + modifier + attribute + '$'
  });
  /* eslint-enable prefer-template */
  return gulp.src('bitstyles/**/*.scss')
    .pipe(postcss([stylelint, bemlint, postcssReporter], { syntax: syntaxScss }));
});

gulp.task('lint:js', function lintJs() {
  return gulp.src(['**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint:scss', 'lint:js']);

gulp.task('styleguide:generate', function styleguideGenerate() {
  return gulp.src('bitstyles/**/*.scss')
    .pipe(styleguide.generate({
      title: 'Bitstyles',
      server: true,
      rootPath: styleguideOutputPath,
      readOnly: true,
      disableEncapsulation: true,
      overviewPath: 'README.md',
      extraHead: [
        '<script src="/assets/javascripts/a11y-dialog.js"></script>',
        '<script src="/assets/javascripts/styleguide-init.js"></script>',
        '<script src="/assets/javascripts/modal.js"></script>'
        '<script src="/assets/javascripts/expander.js"></script>'
      ]
    }))
    .pipe(gulp.dest(styleguideOutputPath));
});

gulp.task('styleguide:applystyles', ['build'], function styleguideApplystyles() {
  return gulp.src([
    'build/bitstyles.css',
    'assets/stylesheets/styleguide-extras.scss'
  ])
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(styleguide.applyStyles())
  .pipe(gulp.dest(styleguideOutputPath));
});

gulp.task('styleguide:assets', function styleguideAssets() {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('styleguide/assets/'));
});

gulp.task(
  'styleguide',
  ['stats', 'styleguide:generate', 'styleguide:applystyles', 'styleguide:assets']
);

gulp.task('test:build', function visualRegressionBuild(callback) {
  spawn('gulp', ['reference', '--cwd', './node_modules/backstopjs/'], { stdio: 'inherit' })
    .on('exit', callback);
});

gulp.task('test:run', function visualRegressionRun(callback) {
  spawn('gulp', ['test', '--cwd', './node_modules/backstopjs/'], { stdio: 'inherit' })
    .on('exit', callback);
});

gulp.task('stats', ['build'], function cssStats() {
  fs.readFile('build/bitstyles.css', function stats(err, data) {
    if (err) throw err;

    const parker = new Parkerstats(ParkerstatsMetrics);
    const results = parker.run(data.toString());
    const showResults = JSON.stringify(results, null, ' ');

    fs.writeFile('./stats/css.json', showResults);
  });
});

gulp.task('stats:console', ['build'], function cssStatsConsole() {
  fs.readFile('build/bitstyles.css', function statsConsole(err, data) {
    if (err) throw err;

    const parker = new Parkerstats(ParkerstatsMetrics);
    const results = parker.run(data.toString());
    const showResults = JSON.stringify(results, null, ' ');

    /* eslint-disable no-console */
    console.log(showResults);
    /* eslint-enable no-console */
  });
});

gulp.task('stats:graph', ['build'], function cssGraph() {
  const graphDir = 'specificity-graph';
  return gulp.src('build/bitstyles.css')
  .pipe(graph({
    directory: graphDir
  }))
  .on('end', function() {
    opener(graphDir + '/index.html');
  });
});

gulp.task('watch:build', function watch() {
  gulp.watch('bitstyles/**/*.scss', ['lint', 'stats']);
});

gulp.task('watch:styleguide', ['styleguide'], function watch() {
  gulp.watch('bitstyles/**/*.scss', ['lint', 'stats', 'styleguide']);
});

gulp.task('default', ['stats']);
