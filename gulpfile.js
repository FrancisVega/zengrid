var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');
    minifyCss = require('gulp-minify-css');

// Styles Task
// Uglifies
gulp.task('styles', function(){
    gulp.src('sass/**/*.scss')
    .pipe(sass({indentedSyntax:false}))
    .pipe(sass({outputStyle:"compact"}))
    .pipe(gulp.dest('css/'))
    .pipe(livereload());

    // gulp.src('css/*.css')
    // .pipe(minifyCss({compatibility: 'ie8'}))
    // .pipe(gulp.dest('css/min'))
});

// CSS
// Livereload
gulp.task('css-styles', function() {
        gulp.src('css/*.css')
        .pipe(livereload());
});

// HTML
// Uglifies
gulp.task('html', function(){
    gulp.src('*.html')
    .pipe(livereload());
});


// Wath Task
// Watches JS
gulp.task('watch', function(){
    var server = livereload.listen();
    // gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/**/*.scss', ['styles']);
    // gulp.watch('css/*.css', ['css-styles']);
    gulp.watch('*.html', ['html']);
});


gulp.task('default', ['styles', 'watch']);
