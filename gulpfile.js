var gulp = require('gulp'),
  postCSS = require('gulp-postcss'),
  cssNext = require('postcss-cssnext'),
  rucksack = require('rucksack-css'),
  del = require('del'),
  browserSync = require('browser-sync').create();

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
    rucksack()
  ];

  return gulp.src('./src/style.css')
    .pipe(postCSS(processors))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['clean', 'style', 'serve']);
