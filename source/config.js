module.exports = {
  sass: {
    src: '../source/scss/**/*.scss',
    dest: '../public/assets/css/',
    style: 'compressed',
    autoprefixer: {
      browsers: ['last 4 versions', 'IE 9']
    },
  },
  js: {
    src: '../source/js/**/*.js',
    dest: '../public/assets/js/',
    minify: true,
  },
  image: {
    src: '../public/assets/images/**/*.*',
    dest: '../public/assets/images/'
  },
  ftp: {
    host: '',
    user: '',
    pass: '',
  }
};
