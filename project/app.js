//引入express
var express=require('express');
//引入图标模块
var favicon = require('serve-favicon');
//引入日志模块
var morgan = require('morgan');
//引入post
var bodyParser = require('body-parser');
//引入ejs
var ejs=require('ejs');
//引用路由
// <<<<<<< HEAD
// var loginRouter=require('./router/loginRouter');

// =======
var indexRouter=require('./router/indexRouter');
// >>>>>>> 61edd4b01d325f7c0752e9453d8ecaf35553947c
//创建服务
var server=express();

//配置浏览器访问的静态文件目录
//console.log(__dirname);//当前目录的绝对路径
server.use(express.static(__dirname+'/public'));

//使用图标模块
server.use(favicon(__dirname+'/public/page/favicon-1.ico'));
//使用日志
server.use(morgan('dev'));
//配置post
server.use(bodyParser.urlencoded({ extended: false }));//设置请求头的类型
server.use(bodyParser.json());//数据以json的形式传输
//使用登录路由
//server.use(loginRouter);
//配置ejs
server.set('views',__dirname+'/view'); //配置模板的路径
server.engine('html',ejs.__express);//声明html引擎
server.set('view engine','html'); //配置模板引擎 模板类型

//给服务配置端口号
server.listen(8080);
