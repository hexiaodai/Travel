0. a. main.js 是我们的入口文件，主要作用是初始化vue实例并使用需要的插件.
   b. App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。其实你也可以理解为所有的路由也是App.vue的子组件。所以我将router标示为App.vue的子组件.
   c. index.html文件入口

1. 上传代码到 git 仓库
  a. git status
  b. git add .
  c. git commit -m 'project initialized'
  d. git push

2. 解决移动端300毫秒延迟
    npm install --save fastclick