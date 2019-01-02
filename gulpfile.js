var gulp = require('gulp')
var rename = require('gulp-rename')
var replace = require('gulp-replace')

var packageJSON = require('./packages/package.json')
var packageName = packageJSON.name
var author = packageJSON.author
var version = packageJSON.version
var tempNames = packageName.split('-')
var names = []
tempNames.forEach(function (tempName) {
  names.push(tempName[0].toUpperCase() + tempName.substring(1))
})
var componentName = names.join('')

gulp.task('addComponent', function () {
  gulp.src('template/fileName/**')
    .pipe(replace(/xxx/, author))
    .pipe(replace(/xxxx-xx-xx/, new Date().toLocaleDateString()))
    .pipe(replace(/componentName/g, componentName))
    .pipe(replace(/fileName/, packageName))
    .pipe(gulp.dest('packages/components/' + packageName))
})

gulp.task('addCss', function () {
  gulp.src('template/css/*.css')
    .pipe(rename(function (path) {
      path.basename = packageName
    }))
    .pipe(replace(/fileName/, packageName))
    .pipe(gulp.dest('packages/theme-default/src'))
})

gulp.task('updateIndexCss', function () {
  gulp.src('template/index.css')
    .pipe(replace(/fileName.css/, packageName + '.css'))
    .pipe(gulp.dest('packages/theme-default/src'))
})

gulp.task('updateIndexJs', function () {
  gulp.src('template/index.js')
    .pipe(replace(/fileName/, packageName))
    .pipe(replace(/xxx/, author))
    .pipe(replace(/xxxx-xx-xx/, new Date().toLocaleDateString()))
    .pipe(replace(/componentName/g, componentName))
    .pipe(gulp.dest('packages'))
})

gulp.task('updateNav', function () {
  gulp.src('template/nav.config.json')
    .pipe(replace(/fileName/g, packageName))
    .pipe(gulp.dest('examples'))
})

gulp.task('addComponentMd', function () {
  gulp.src('template/fileName.md')
    .pipe(rename(function (path) {
      path.basename = packageName
    }))
    .pipe(replace(/fileName/g, packageName))
    .pipe(gulp.dest('examples/docs'))
})

gulp.task('updateOtherMd', function () {
  gulp.src('template/install.md')
    .pipe(replace(/fileName/g, packageName))
    .pipe(gulp.dest('examples/docs'))
  gulp.src('template/use.md')
    .pipe(replace(/fileName/g, packageName))
    .pipe(replace(/componentName/g, componentName))
    .pipe(gulp.dest('examples/docs'))
})

gulp.task('updateREADME', function () {
  gulp.src('template/README.md')
    .pipe(replace(/fileName/g, packageName))
    .pipe(replace(/version/g, version))
    .pipe(replace(/xxx/, author))
    .pipe(gulp.dest('packages'))
})

gulp.task('default', ['addComponent', 'addCss', 'updateIndexCss', 'updateIndexJs', 'updateNav', 'addComponentMd', 'updateOtherMd', 'updateREADME'])
