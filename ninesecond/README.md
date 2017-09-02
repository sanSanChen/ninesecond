# ninesecond
1、首先要安装有node和npm包 可以在命令行输入node -v 或者npm -v 查看版本<br> 
<br>
2、到根目录打开git命令行输入npm install <br>
<br>
3、最后输入npm run dev即可 <br>
<br>
[点击预览ninesecond](http://sansanchen.github.io/ninesecond/ninesecond/dist/)


## 简述一下所用到的
#### 首先要安装有node和npm包以及命令行使用并具有基本的vue组件编写能力，不懂的可以去看[vue官方文档](https://cn.vuejs.org/)
1、下载vue-cli (vue自动化构建指令 npm install vue-cli) <br>
<br>
2、输入命令 vue init webpack project(此处是创建文件的名字) <br>
<br>
3、src文件夹下 components里编写你的组件 router里面编写你需要用到的路由 可以在main.js中引入你的静态公共css（比如清楚默认样式）<br>
<br>
4、static文件夹下用来存放你的本地静态img/js/css（之后会被打包到指定的文件中）

#### 基本指令
1、npm run dev 启动本地开发环境（默认打开localhost:8080）<br>
<br>
2、npm run build 打包文件生成dist文件夹（所有打包后的文件，包括index.html,static/js|img|css）<br>
<br>
3、发布到服务器 只需要打包好的dist文件夹即可<br>

#### 配置webpack 
1、config文件夹下的index.js 中的build项中assetsSubDirectory是用来存放打包后的img/css/js的文件名称。<br>
<br>
2、assetsPublicPath是用来配置服务端的公共地址（就是你的线上发布地址比如http://aaa.com/dist/）  打包好的文件里的img/js/css会自动添加网络前缀。比如说打包前你的img的src（../static/1.png）,打包后（http://aaa.com/dist/static/1.png）;<br>
<br>
3、config文件夹下的index.js中的 dev项中port:本地浏览端口地址，autoOpenBrowser是否自动打开浏览器，proxyTable用来配置本地ip<br>

#### vue-router+webpack(require.ensure)按需加载
1.const Joinus=resolve=>{ <br> 
	&nbsp;require.ensure([],()=>{ <br>
		&nbsp;&nbsp;resolve(require('../components/Joinus.vue'));<br>
	},'Joinus');<br>
}<br>
new VueRouter(<br>
  &nbsp;routes:[{<br>
    &nbsp;&nbsp;path: '/',<br>
    &nbsp;&nbsp;name: 'Joinus',<br>
    &nbsp;&nbsp;component: Joinus}<br>
  &nbsp;]<br>
&nbsp;)<br>
路由还是正常配置，只是引入模块的时候加入了require.ensure <br>
<br>
require.ensure 有三个参数，第一个：模块的依赖，第二个：回调函数（加载模块的地方），第三个：分拆打包后的js文件名称，这里要注意需要在build/webpack.base.conf.js里的output里添加chunkFilename:"[name].js"

##### 假如你要用:src来绑定data中的图片地址，data中要用src:require('../images/1.png'),不能直接写src:"../images/1.png",否则webpack不会打包此类图片。
