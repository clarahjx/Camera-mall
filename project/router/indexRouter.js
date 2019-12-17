var express=require('express');
var indexController=require('../controller/indexController');
var myRouter=express.Router();

myRouter.route('/index').get(indexController.index);
module.exports=myRouter;
