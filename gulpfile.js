var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/style.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss', ['styles']);
});
