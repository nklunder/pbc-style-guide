var gulp = require('gulp');
var pug = require('gulp-pug');
var postCSS = require('gulp-postcss');
var cssNext = require('postcss-cssnext');
var rucksack = require('rucksack-css');
var mqPacker = require('css-mqpacker');
var cssNano = require('cssnano');
var del = require('del');
var browserSync = require('browser-sync').create();

gulp.task('clean', function () {
  return del('./build/**/*');
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./build/"
    }
  });

  gulp.watch("./src/css/**/*.css", ['style']);
  gulp.watch('.src/js/**/*.js', ['scripts']);
  gulp.watch("./src/pug/**/*.pug", ['views']);
});

gulp.task('views', function () {
  return gulp.src('./src/pug/**/!(_)*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream());
});

gulp.task('style', function() {
  var processors = [
    cssNext(),
    rucksack(),
    mqPacker()
  ];

  return gulp.src('./src/css/**/*.css')
    .pipe(postCSS(processors))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
  return gulp.src('./src/js/*.js')
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

gulp.task('default', [
  'clean',
  'views',
  'style',
  'scripts',
  'images',
  'fonts',
  'serve'
]);
