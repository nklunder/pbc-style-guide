var gulp = require('gulp'),
    postCSS = require('gulp-postcss'),
    cssNext = require('postcss-cssnext'),
    rucksack = require('rucksack-css'),
    server = require('gulp-webserver');

gulp.task('style', function () {
  var processors = [
    cssNext(),
    rucksack()
  ];

  return gulp.src('./src/style.css')
    .pipe(postCSS(processors))
    .pipe(gulp.dest('./build'));
});

gulp.task('webserver', function () {
  gulp.src('./')
  .pipe(server({
    livereload: true,
    directoryListing: true,
    open: true
  }));
});
