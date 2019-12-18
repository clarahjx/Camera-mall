var loginModel=require('../model/loginModel');
var loginController={
    login: function (req,res) {
        var user=req.query.user;
        var pass=req.query.pass;
        loginModel.login(user,pass,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else{
                if (data.length){
                    res.send('登录成功')
                } else{
                    res.send('用户不存在')
                }
            }
        })
    }
};

module.exports=loginController;