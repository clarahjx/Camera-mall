//写业务
var loginModel=require('../model/loginModel');
//给前端返回生成的token
//var jsonwebtoken=require('jsonwebtoken');
//引入密钥
//var secretOrPrivateKey=require('../public/util/secretConfig');
var loginController={
    login: function (req,res) {
        var user=req.body.user;
        var pass=req.body.pass;
        loginModel.login(user,pass,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else{
                if (data.length){
                    req.session.user=data[0];
                    res.send({error:0,msg:'登录成功'});
                   // res.send({
                   //     error:0,
                   //     msg:'登录成功',
                   //     token:jsonwebtoken.sign({
                   //         name:user
                   //     },secretOrPrivateKey,{
                   //         expiresIn:1000 * 10   //过期时间
                   //     })
                   // })
                } else{
                    res.send({error:1,msg:'账号或密码错误'});
                }
            }
        });
    },
    register:function (req,res) {
        var user=req.body.user;
        var pass=req.body.pass;
        var phone=req.body.phone;
        var email=req.body.email;
        var sex=req.body.sex;
        loginModel.register(user,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            }else{
               if (data.length){
                   res.send('用户已存在')
               } else{
                   loginModel.add(user,pass,phone,email,sex,function (err,data) {
                       if (err){
                            console.log('数据库错误'+err)
                       }else{
                           res.send('注册成功')
                       }
                   });
               }
            }
        })
    }
};

module.exports=loginController;