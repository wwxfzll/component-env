var webpack = require("webpack");
var comp = require("./webpack.comp.conf");
var fs = require("fs");
var inquirer = require("inquirer");
const path = require("path");

var packageJSON = require("../package.json");
var componentPackageJSON = require("../packages/package.json");

var child_process = require("child_process");

console.log("production start.\n");
webpack(comp, function (err, stats) {
  if (err) throw err;
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + "\n"
  );
  var date = new Date();
  console.log(
    date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      " production conplete.\n"
  );

  //提取依赖版本
  componentPackageJSON.peerDependencies["vue"] =
    packageJSON.dependencies["vue"];
  componentPackageJSON.peerDependencies["element-ui"] =
    packageJSON.dependencies["element-ui"];
  //本组件版本
  inquirer
    .prompt([
      {
        name: "version",
        message: "版本",
        default: componentPackageJSON.version,
      },
    ])
    .then((answer) => {
      componentPackageJSON.version = answer.version;
      var jsonPath = path.resolve(__dirname, "../packages/package.json");
      var jsonResult = JSON.stringify(componentPackageJSON, null, 4);
      //写入组件package.json；注意：node10.12.0写入文件无法正常回调
      // fs.writeFile(jsonPath, jsonResult, function (err) {
      //   !err && console.log("write componentPackage.json success");
      // });
      try {
        fs.writeFileSync(jsonPath, jsonResult);
        console.log("write componentPackage.json success");
      } catch (error) {
        console.log(error);
      }

      //生成svn版本
      // child_process.execFile(
      //   "svn_update.bat",
      //   null,
      //   { cwd: process.cwd() },
      //   function (error, stdout, stderr) {
      //     if (error !== null) {
      //       console.log("exec error" + error);
      //     } else {
      //       console.log("svn本地副本版本生成成功");
      //     }
      //   }
      // );
    });
});
