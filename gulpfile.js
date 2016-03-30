var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    styleguide = require('sc5-styleguide'),
    styleguideOutputPath = 'styleguide';

gulp.task('build', function() {
  return gulp.src('stylesheets/bitstyles.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/'));
});

gulp.task('lint', function() {
  return gulp.src('stylesheets/**/*.scss')
    .pipe(scsslint({'config': '.scss-lint.yml'}));
});

gulp.task('styleguide:generate', function() {
  return gulp.src('stylesheets/**/*.scss')
    .pipe(styleguide.generate({
        title: 'Bitstyles',
        server: true,
        rootPath: styleguideOutputPath,
        readOnly: true,
        overviewPath: 'README.md'
      }))
    .pipe(gulp.dest(styleguideOutputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('build/bitstyles.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(styleguideOutputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.scss', ['styles', 'scss-lint']);
});
