# ninesecond
1、首先要安装有node和npm包 可以在命令行输入node -v 或者npm -v 查看版本 <br>
2、到根目录打开git命令行输入npm install <br>
3、最后输入npm run dev即可 <br>
[点击预览](http://sansanchen.github.io/ninesecond/ninesecond/dist/)


## 简述一下所用到的
### 首先要安装有node和npm包以及命令行使用并具有基本的vue组件编写能力，不懂的可以去看[vue官方文档](https://cn.vuejs.org/)
1.下载vue-cli (vue自动化构建指令 npm install vue-cli) <br>
2.输入命令 vue init webpack project(此处是创建文件的名字) <br>
3.src文件夹下 components里编写你的组件 router里面编写你需要用到的路由 可以在main.js中引入你的静态公共css（比如清楚默认样式）<br>
4.static文件夹下用来存放你的本地静态img/js/css（之后会被打包到指定的文件中）<br>

### 基本指令
1.npm run dev 启动本地开发环境（默认打开localhost:8080）<br>
2.npm run build 打包文件生成dist文件夹（所有打包后的文件，包括index.html,static/js|img|css）<br>
3.发布到服务器 只需要打包好的dist文件夹即可<br>

### 配置webpack 
1.config文件夹下的index.js 中的build项中assetsPublicPath是用来配置服务端的公共地址（就是你的线上发布地址比如http://aaa.com/dist/）  打包好的文件里的img/js/css会自动添加网络前缀。比如说打包前src（../static/1.png）,打包后（http://aaa.com/dist/static/1.png）;
