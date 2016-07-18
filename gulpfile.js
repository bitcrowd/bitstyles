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

gulp.task('build', function compileCss() {
  return gulp.src('stylesheets/bitstyles.scss')
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
  const stylelint = require('stylelint');
  const bemlint = require('postcss-bem-linter')({
    preset: 'bem',
    ignoreSelectors: [
      '.is-active'
    ]
  });

  return gulp.src('stylesheets/**/*.scss')
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
  return gulp.src('stylesheets/**/*.scss')
    .pipe(styleguide.generate({
      title: 'Bitstyles',
      server: true,
      rootPath: styleguideOutputPath,
      readOnly: true,
      overviewPath: 'README.md',
      extraHead: [
        '<script src="/assets/javascripts/styleguide-init.js"></script>'
      ]
    }))
    .pipe(gulp.dest(styleguideOutputPath));
});

gulp.task('styleguide:applystyles', function styleguideApplystyles() {
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
  ['build', 'styleguide:generate', 'styleguide:applystyles', 'styleguide:assets']
);

gulp.task('test:build', function visualRegressionBuild(callback) {
  spawn('gulp', ['reference', '--cwd', './node_modules/backstopjs/'], { stdio: 'inherit' })
    .on('exit', callback);
});

gulp.task('test:run', function visualRegressionRun(callback) {
  spawn('gulp', ['test', '--cwd', './node_modules/backstopjs/'], { stdio: 'inherit' })
    .on('exit', callback);
});

gulp.task('watch', function watch() {
  gulp.watch('stylesheets/**/*.scss', ['lint', 'build']);
});
