var gulp = require('gulp');
var pug = require('gulp-pug');
var postCSS = require('gulp-postcss');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();


gulp.task('clean', function () {
  del('./build/**/*');
});


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./build/"
    }
  });

  gulp.watch("src/css/**/*.css", ['style']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch("src/pug/**/*.pug", ['pug-watch']);
});


gulp.task('views', function () {
  return gulp.src('./src/pug/**/!(_)*.pug')
    .pipe(handleError('Pug error'))
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./build/'));
});
// Makes sure 'views' task completes before browser reload. 'reload' callback
// has to be wrapped in function in order for it to work correctly
// https://stackoverflow.com/questions/29801070/gulp-browser-sync-only-works-once/30438407#30438407
gulp.task('pug-watch', ['views'], function () {
  browserSync.reload();
});


gulp.task('style', function() {
  var processors = [
    require('postcss-partial-import')(),
    require('postcss-cssnext')(),
    require('postcss-nesting')(),
    require('rucksack-css')()
  ];

  return gulp.src('./src/css/style.css')
    .pipe(handleError('Style error'))
    .pipe(postCSS(processors))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
});


gulp.task('scripts', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.stream());
});


gulp.task('images', function () {
  return gulp.src('./src/img/*.*')
    .pipe(gulp.dest('./build/img/'));
});


gulp.task('fonts', function () {
  return gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./build/fonts/'));
});


gulp.task('default',
  runSequence(
    'clean',
    [ 'views', 'style', 'scripts', 'images', 'fonts'],
    'serve'
  )
);

function handleError(errTitle) {
  return plumber({
    errorHandler: notify.onError({
      title: errTitle || 'Gulp error',
      message: 'Error: <%= error.message %>'
    })
  });
}
