# component-env

# 安装
1. 安装gulp：npm install gulp -g（已安装则不用再安装）

二选一：
1. npm方式：npm install
2. yarn方式（推荐）：yarn install（请先查看下面关于Element-UI版本问题）

# 规范
1. 组件命名： 以sx开头、以-为间隔（例：上传组件sx-upload-dialog，建议sxw init sx-upload-dialog初始化，不然只能改packages/package.json的name）
2. vue风格指南： http://wiki.istrongcloud.com/spaces/90a0389fb48048e2ac25deed93ae613b/e1f32287/viewdocuments/b897b216
3. BEM约定：https://www.w3cplus.com/css/bem-definitions.html

# 命令说明
1. npm run addC 自动化添加和调整组件及其相关文件内容
2. npm run dev 组件开发
3. 进入examples/docs目录，打开install.md文件，调整当前组件版本
4. npm run build 生成组件效果、api的demo页面
5. npm run svn 生成svn版本命令（注意svn安装地址是否与svn_update命令内的地址一致，若不一致需要手动调整svn_update）
6. npm run comp 编译组件提供外部使用，并为上传到公司npm库做准备
7. 进入packages目录，打开README.md文件，调整当前版本的网址，增加历史版本的网址
8. npm config set registry http://192.168.118.166:4873/
9. npm login （用户、密码、邮箱）
10. 进入packages目录，npm publish 发布到npm库
11. 访问 http://192.168.118.166:4873/ 查看相应组件内容
12. npm unpublish 组件名@版本 撤销组件某个版本（慎重）

# 版本变化规则
1. 版本格式：xx.xx.xx(例：默认从1.0.0开始)
2. 排版、样式微调、bug修复，版本升级为1.0.x(例：1.0.1)
2. 参数调整、新增功能，版本升级为1.x.0（例：1.1.0）
3. 依赖库改变或用新的方式实现功能，版本升级为x.0.0（例：2.0.0）

# svn版本管理
1. npm publish将组件发布后，将改过和生成的代码提交svn时，提交内容为“version:xx.xx.xx”（xx.xx.xx为发布的版本），以便后续维护

# 切换源
1. npm:
npm config set registry http://192.168.118.166:4873/
npm config set registry https://registry.npm.taobao.org
2. yarn:
yarn config set registry https://registry.npm.taobao.org

# Element-UI版本问题
1. 目前易交易上element-ui的版本为1.3.7，将package.json中的element-ui版本调整为1.3.7，yarn.lock中的element-ui版本调整为1.3.7
element-ui@^1.3.7:
  version "1.3.7"
  resolved "http://registry.npm.taobao.org/element-ui/download/element-ui-1.3.7.tgz#ed6e2e371b767fd7b8a8015dc284e4af5e940026"
  dependencies:
    async-validator "1.6.9"
    babel-helper-vue-jsx-merge-props "^2.0.0"
    deepmerge "^1.2.0"
    throttle-debounce "^1.0.1"
执行yarn install
进入examples目录，打开main.js文件，将element-ui的样式引用调整为import 'element-ui/lib/theme-default/index.css'

2. 如果要用其他版本可自行调整

### author:wwx
