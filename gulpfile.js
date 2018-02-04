var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
 return gulp.src('app/scss/styles.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({
                stream: true
            }))
});

//gulp.task('watch',['browserSync', 'sass'], function(){
gulp.task('watch',['browserSync'], function(){
  gulp.watch('app/scss/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});