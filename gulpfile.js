var requireDir  = require('require-dir');

global.za_gulp = {};
global.za_gulp.config = {
  libName: "boilerplate-experimental",
  appName: "app-example",
  dstDir: "./bin",
  srcDir: "./src",
  appDir: "./test/app",
  tstDir: "./test"
};

global.za_gulp.config.libFiles =  [
    za_gulp.config.srcDir + "/za_lib.za_lib.js",
    za_gulp.config.srcDir + "/za_lib.baseObj.js",
];

global.za_gulp.config.appFiles = [
    za_gulp.config.appDir + "/za_app.za_app.js",
    za_gulp.config.appDir + "/za_app.product.js",
    za_gulp.config.appDir + "/za_app.food.js",
    za_gulp.config.appDir + "/za_app.cake.js",
    za_gulp.config.appDir + "/za_app.fruit.js"
];

requireDir('./gulp', { recurse: true });
