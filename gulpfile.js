var gulp = require('gulp')
var rename = require('gulp-rename')
var replace = require('gulp-replace')



var packageJSON = require('./packages/package.json')
var packageName = 'sx-upload-dialog'//packageJSON.name
var author = 'wwx'//packageJSON.author
var tempNames = packageName.split('-')
var names = []
tempNames.forEach(function(tempName){
    names.push(tempName[0].toUpperCase() + tempName.substring(1))
})



gulp.task('addComponent',function(){
    gulp.src('template/componentName/**')
        .pipe(replace(/componentName/g, names.join('')))
        .pipe(replace(/xxx/, author))
        .pipe(replace(/xxxx-xx-xx/, new Date().toLocaleDateString()))
        .pipe(gulp.dest('packages/components/'+ packageName))
})

gulp.task('addCss',function(){
    gulp.src('template/css/*.css')
        .pipe(rename(function(path){
            path.basename = packageName
        }))
        .pipe(replace(/componentName/, packageName))
        .pipe(gulp.dest('packages/theme-default/src'))
})

gulp.task('updateIndexJs',function(){
    gulp.src('')
})

gulp.task('default', ['addCss'])