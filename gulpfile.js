var gulp            = require('gulp'),
    styleguide      = require('sc5-styleguide'),
    spawn           = require('child_process').spawn,
    postcss         = require('gulp-postcss'),
    reporter        = require('postcss-reporter'),
    postcssReporter = reporter({
      clearMessages: true,
      throwError: true
    }),
    styleguideOutputPath = 'styleguide',
    syntaxScss      = require('postcss-scss');

gulp.task('build', function() {
  var sass = require('gulp-sass'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      sourcemaps = require('gulp-sourcemaps');

  return gulp.src('stylesheets/bitstyles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] }), cssnano({safe: true}), postcssReporter]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/'));
});

gulp.task('lint', function() {
  var stylelint          = require('stylelint'),
      stylelintProcessor = stylelint();

  return gulp.src('stylesheets/**/*.scss')
    .pipe(postcss([stylelintProcessor, postcssReporter], {syntax: syntaxScss}));
});

gulp.task('styleguide:generate', function() {
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

gulp.task('styleguide:applystyles', function() {
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

gulp.task('styleguide:assets', function() {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('styleguide/assets/'));
});

gulp.task('styleguide', ['build', 'styleguide:generate', 'styleguide:applystyles', 'styleguide:assets']);

gulp.task('test:build', function(callback){
  spawn('gulp', ['reference', '--cwd', './node_modules/backstopjs/'], { stdio: 'inherit' }).on('exit', callback);
});

gulp.task('test:run', function(callback){
  spawn('gulp', ['test', '--cwd', './node_modules/backstopjs/'], { stdio: 'inherit' }).on('exit', callback);
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.scss', ['lint', 'build']);
});
