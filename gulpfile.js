var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// gulp.task('task-name', function() {
//   // Stuff here
//
// });

gulp.task('hello', function() {
  // Stuff here
  console.log('Hello Chris');
});

// gulp.task('task-name', function () {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// })

gulp.task('sass', function () {
  return gulp.src('app/scss/styles.scss') // Get source files with gulp.src
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('app/css')); // Outputs the file in the destination folder
});
