var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint');

gulp.task('styles', function() {
  return gulp.src('stylesheets/bitstyles.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/'));
});

gulp.task('scss-lint', function() {
  return gulp.src('stylesheets/**/*.scss')
    .pipe(scsslint({'config': '.scss-lint.yml'}));
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.scss', ['styles', 'scss-lint']);
});
