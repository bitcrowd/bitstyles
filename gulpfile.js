var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src('bitstyles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./**/*.scss', ['styles']);
});
