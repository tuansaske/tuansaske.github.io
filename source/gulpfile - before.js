(() => {

  'use strict';

  /**************** Gulp.js 4 configuration ****************/

  const

    // development or production
    devBuild  = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),

    // modules

    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    // SASS
    sassGlob = require('gulp-sass-glob'),
    autoprefixer = require('gulp-autoprefixer'),
    gulp          = require('gulp'),
    gulpif        = require('gulp-if'),
    del           = require('del'),
    sass          = require('gulp-sass'),
    // config
    config        = require('./config'),
    browsersync   = require('browser-sync').create();


  console.log('Gulp', devBuild ? 'development' : 'production', 'build');




  /**************** CSS task ****************/

  function css() {

      return gulp.src(config.sass.src)
        .pipe(plumber({
          errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(sassGlob())
        .pipe(sass({
          outputStyle: config.sass.style
        }))
        .pipe(autoprefixer(config.sass.autoprefixer))
        .pipe(gulp.dest(config.sass.dest))
        .pipe(browsersync.reload({
          stream: true
        }));

  }
  exports.css = gulp.series(css);


  /**************** watch task ****************/

  function watch(done) {

    // image changes
    // gulp.watch(config.image.src, images);

    // CSS changes
    config.sass.style = 'expanded';
    gulp.watch(config.sass.src, css);

    done();

  }
  exports.watch = watch;

  /**************** default task ****************/

  exports.default = gulp.series(exports.css, watch);

})();
