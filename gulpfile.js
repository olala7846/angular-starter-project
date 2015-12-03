// gulp task created by olala7846
//
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('reload-browser', function() {
  console.log('File change, reload browser');
  browserSync.reload();
});

gulp.task('watch', function() {
  var files = ['./**.html', './**.js', './**.css'];
  gulp.watch(files, ['reload-browser']);
});

gulp.task('default', ['browser-sync', 'watch']);


