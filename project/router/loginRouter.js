var express=require('express');
//要使用express里面路由的功能
var myRouter=express.Router();
//引入控制层
var loginController=require('../controller/loginController');

myRouter.route('/login').get(loginController.login);

module.exports=myRouter;