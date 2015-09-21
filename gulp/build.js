var gulp = require("gulp");
var util = require("gulp-util");
var gulpprint = require("gulp-print");
var gulpconcat = require("gulp-concat");
var uglify = require("gulp-uglify");
var dest = require("gulp-dest");
var jshint = require("gulp-jshint");
var jscs = require("gulp-jscs");
var runSeq  = require('run-sequence');

function buildBase(isMin, fileList, dstName)
{
  isMin = isMin || false;
  fileList = fileList || za_gulp.config.libFiles;
  dstName = dstName || za_gulp.config.libName;

  var suffix = isMin ? ".min" : "";
  var dstFileName = dstName + suffix + ".js";
  var s1 = gulp
    .src(fileList)
    .pipe(gulpprint())
    .pipe(gulpconcat(dstFileName));

  var s2;
  if (isMin) {
    s2 = s1.pipe(uglify());
  }
  else {
    s2 = s1
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish", {verbose: true}));
  }

  return s2
    .pipe(gulp.dest(za_gulp.config.dstDir));

}

gulp.task("build-bin", function(done){
  util.log(util.colors.blue("Build minified bin"));
  return buildBase(true);
});

gulp.task("build-dev", function(done){
  util.log(util.colors.blue("Build dev"));
  return buildBase(false);
});

//TODO: more tests
gulp.task("build-test", function(done){
  util.log(util.colors.blue("Build test"));
  var fileList = za_gulp.config.libFiles
    .concat(za_gulp.config.appFiles);
  fileList.push(za_gulp.config.tstDir+"/za_test.main.js")
  util.log(util.colors.blue("Build test app"));
  return buildBase(false, fileList, "test");
});

gulp.task('build', function (done) {
    runSeq('build-dev', 'build-bin', 'build-test', done);
});
