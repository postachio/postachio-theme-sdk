// requirements
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    nodemon = require('gulp-nodemon'),
    concat = require('gulp-concat'),
    path = require('path');    
    
// startups
gulp.task('default', ['node']);

// node 
gulp.task('node', function() {

  nodemon({ script: 'app.js', env: { 'NODE_ENV': 'development' }, ext: 'html js less', ignore: [path.js + 'app.min.js'] })
  .on('change', ['less'])
  .on('restart', function(items) {
    console.log(items);
  });

});

// run
gulp.task('less', function() {
  
  // easier to read variable
  var themeName = 'cold-omaha';
  
  // less
  gulp.src('./assets/less/' + themeName + '.less')
    .pipe(less({ paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./assets/css/'));

  // uglify
  gulp.src('./assets/js/' + themeName + '.js')
    .pipe(uglify())
    .pipe(rename(themeName + '.min.js'))
    .pipe(gulp.dest('./assets/js/'));
  
});