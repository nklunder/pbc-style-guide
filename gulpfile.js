var gulp = require('gulp');
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
      baseDir: "./"
    }
  });

  gulp.watch("./src/**/*.css", ['style']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('style', function() {
  var processors = [
    cssNext(),
    rucksack(),
    // TODO: move these plugins to a 'build' task
    mqPacker(),
    cssNano({ autoprefixer: false })
  ];

  return gulp.src('./src/style.css')
    .pipe(postCSS(processors))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['clean', 'style', 'serve']);
