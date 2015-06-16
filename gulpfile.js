require('babel/register')({
  only: ['src/**'],
  optional: ['runtime'],
});

var eslint = require('gulp-eslint');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var mocha = require('gulp-mocha');

function lint() {
  return gulp.src(['src/**/*.js', 'src/**/*.jsx'])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
}

function test() {
  return gulp.src(['src/**/*.js', 'src/**/*.jsx'])
    .pipe(mocha());
}

gulp.task('lint', lint);
gulp.task('test', ['lint'], test);
gulp.task('default', ['test']);
