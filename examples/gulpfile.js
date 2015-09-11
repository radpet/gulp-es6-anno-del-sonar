var gulp = require('gulp');
var es6annoDel = require('../');

gulp.task('removeAnnotations', function(){
    gulp.src('./anno.js')
        .pipe(es6annoDel())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['removeAnnotations']);