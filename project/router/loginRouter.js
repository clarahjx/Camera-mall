var express=require('express');
//要使用express里面路由的功能
var myRouter=express.Router();
//引入控制层
var loginController=require('../controller/loginController');

myRouter.route('/login').post(loginController.login);

myRouter.route('/register').post(loginController.register);
;

module.exports=myRouter;