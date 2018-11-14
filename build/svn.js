var fs = require('fs')

//执行命令所在目录
var path = process.cwd()

//svn版本命令内容
var cmdStr = []
cmdStr.push('setlocal')
cmdStr.push('::设置svn客户端安装目录')
cmdStr.push('set SVN_PATH=C:/Program Files/TortoiseSVN/bin')
cmdStr.push('::设置工作目录，即工程目录')
cmdStr.push('set WORK_DIR=' + path)
cmdStr.push(':设置版本模版文件，对应第一步中新建的模板文件')
cmdStr.push('set VERSION_TEMPLATE=' + path + '/svn_version_template.txt')
cmdStr.push('::设置版本号生成文件，生成的文件就是我们需要使用的版本文件')
cmdStr.push('set VERSION_RELEASE=' + path + '/packages/svn_version.txt')
cmdStr.push('::进入svn客户端安装目录')
cmdStr.push('cd %SVN_PATH%')
cmdStr.push('::执行更新版本号操作')
cmdStr.push('SubWCRev.exe "%WORK_DIR%" "%VERSION_TEMPLATE%" "%VERSION_RELEASE%"')
cmdStr.push('endlocal')

//生成命令bat
fs.writeFile(path + '/svn_update.bat', cmdStr.join('\r\n'), function (err) {
  if(err){
    return console.log(err)
  }
  console.log('svnupdate.bat create success!')
})
