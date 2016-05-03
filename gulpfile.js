var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    styleguide = require('sc5-styleguide'),
    styleguideOutputPath = 'styleguide',
    spawn = require('child_process').spawn;

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
  gulp.watch('stylesheets/**/*.scss', ['build', 'lint']);
});
