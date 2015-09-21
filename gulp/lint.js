var gulp = require("gulp");
var jscs = require("gulp-jscs");
var jshint = require("gulp-jshint");
var util = require("gulp-util");

gulp.task("lint-raw", function(){
  util.log(util.colors.blue("Analizing raw draft with gulp"));
  return gulp
    .src([
      "boilerplate-draft.js"
    ])
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish", {verbose: true}));
});

gulp.task("lint", function(){
  util.log(util.colors.blue("Analizing dev with gulp"));
  return gulp
    .src([
      za_gulp.config.dstDir + "/" + za_gulp.config.libName + ".js"
    ])
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish", {verbose: true}));
});
