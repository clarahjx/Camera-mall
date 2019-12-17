// var indexModel=require('../model/indexModel')

var indexController={
    index:function (req,res) {
        res.render('index');
    }
};
module.exports=indexController;