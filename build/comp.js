var webpack = require('webpack')
var comp = require('./webpack.comp.conf')
var fs = require('fs')
var inquirer = require('inquirer')
const path = require('path')

var packageJSON = require('../package.json')
var componentPackageJSON = require('../packages/package.json')

console.log('production start.\n')
webpack(comp, function (err,stats) {
    if(err) throw err
    process.stdout.write(stats.toString({
            colors:true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        })+ '\n')
    var date = new Date()
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ' production conplete.\n')

    componentPackageJSON.peerDependencies['vue'] = packageJSON.dependencies['vue']
    componentPackageJSON.peerDependencies['element-ui'] = packageJSON.dependencies['element-ui']
    inquirer.prompt([
      {
        name: 'version',
        message: '版本',
        default: componentPackageJSON.version
      }
    ]).then(answer => {
      componentPackageJSON.version = answer.version
      var jsonPath = path.resolve(__dirname, '../packages/package.json')
      var jsonResult = JSON.stringify(componentPackageJSON, null, 4)
      fs.writeFile(jsonPath, jsonResult, function(err){
        !err && console.log("write componentPackage.json success");
      })
    })
})
