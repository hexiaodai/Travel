0. a. main.js 是我们的入口文件，主要作用是初始化vue实例并使用需要的插件.
   b. App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。其实你也可以理解为所有的路由也是App.vue的子组件。所以我将router标示为App.vue的子组件.
   c. index.html文件入口

1. 上传代码到 git 仓库
  a. git status
  b. git add . // 将修改的代码提交到缓存区
  c. git commit -m 'project initialized' // 将缓存区的内容提交到本地仓库
  d. git push // 将本地仓库的代码提交到线上

  分支
  a. git pull // 拉取分支
  b. git checkout index-swiper // 选择分支

  合并分支
  a. git checkout master // 切换到 master分支下
  b. git merge origin/index-swiper // 将index-swiper新增的内容合并到 master分支上

2. 解决移动端300毫秒延迟
    npm install --save fastclick

3. sass语法环境
    npm install --save-dev node-sass sass-loader

4. 安装Swiper(幻灯片组件) 版本：2.6.7
    npm install --save vue-awesome-swiper@2.6.7
