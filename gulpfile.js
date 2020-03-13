// Imports.
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var ts = require( 'gulp-typescript' );
var tsProject = ts.createProject( 'tsconfig.json' );

// SASS compiling:
gulp.task( 'sass', function() {
  return gulp.src( 'src/scss/**/*.scss' )
    .pipe( sass().on('error', sass.logError) )
    .pipe( gulp.dest('./css/') );
} );

// TypeScript compiling:
gulp.task( 'tsc', function() {
  return tsProject.src()
    .pipe( tsProject() )
    .js.pipe( gulp.dest( './' ) );
});

// Watch task
gulp.task( 'default', function() {
  gulp.watch( ['src/scss/**/*.scss', 'src/tsc/**/*.ts'], gulp.series( ['sass', 'tsc'] ) );
});
