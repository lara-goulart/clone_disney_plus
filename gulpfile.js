const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compCss() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest('./dist/css'))
}

exports.default = compCss
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compCss))
}