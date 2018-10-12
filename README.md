# component-env

# 安装
0. 安装gulp：npm install gulp -g

二选一：
1. npm方式：npm install
2. yarn方式（推荐）：
yarn config set phantomjs-prebuilt http://registry.npm.taobao.org/phantomjs-prebuilt
yarn install

# 规范
1. 组件命名： 以sx开头（例：上传组件sx-upload-dialog，建议sxw-cli init sx-upload-dialog初始化，不然只能改packages/package.json的name）
2. vue风格指南： http://wiki.istrongcloud.com/#/spaces/90a0389fb48048e2ac25deed93ae613b/viewdocuments/b897b216
3. BEM约定：https://www.w3cplus.com/css/bem-definitions.html

# 命令说明
1. npm run addC 自动化添加和调整组件及其相关文件内容
2. npm run dev 组件开发
3. npm run build 生成组件效果、api的demo页面
4. npm run comp 编译组件提供外部使用，并为上传到公司npm库做准备
5. npm set registry http://192.168.118.166:4873/
6. npm login （用户、密码、邮箱）
7. 进入packages目录，npm publish 发布到npm库
8. 访问 http://192.168.118.166:4873/ 查看相应组件内容
9. npm unpublish 组件名@版本 撤销组件某个版本
