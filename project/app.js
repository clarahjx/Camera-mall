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

//引入cookie
var cookie=require('cookie-parser');
//引入session
var session=require('express-session');
//引入jwt 用来验证token的
var expressJWT=require('express-jwt');
//引入密钥
var secretOrPrivateKey=require('./public/util/secretConfig');
//引入短信功能
var AV=require('leanengine');
//引用路由
var loginRouter=require('./router/loginRouter');
//创建服务
var server=express();

//使用cookie
server.use(cookie());
//配置session
server.use(session({
    secret:'web207', //密钥 签名 是一个字符串 随便写
    name:'demo',    //存在cookie里面的名字
    resave:true,    //布尔值 是否重新保存
    rolling:true,   //布尔值  是否更新失效时间
    cookie:{maxAge:1000*180},  //失效的时间 毫秒数
}));
//拦截所有的路由,先判断session
server.all('*',function (req,res,next) {
    // console.log(req.session);
    // next();
    if (req.session.user){
        next();
    } else{
        //console.log(req.url); //请求的路径
        // console.log(req.headers.referer); //请求发出的地址
        if (req.url=='/page/login.html' || req.url=='/css/login.css' ||
            req.url=='/util/jquery-3.4.1.js'|| req.url=='/util/ajax.js' ||
            req.url=='/image/bgk.jpg'|| req.url=='/favicon.ico'       ||
            req.url=='/page/register.html' || req.url=='/css/register.css' ||
            req.url=='/image/background.jpg' || req.url=='/register' ||
            req.url=='/page/shop-car.html' ||
            req.headers.referer=='http://localhost:8888/page/login.html'){//如果他是登录的接口
            next();
        }else{
            res.redirect('http://localhost:8888/page/login.html')
        }
    }
});
//配置浏览器访问的静态文件目录
console.log(__dirname);//当前目录的绝对路径
server.use(express.static(__dirname+"/public"));

//server.use(express.static(__dirname+"/"));
//server.use(express.static(__dirname+"/public/page"));
//使用图标模块
server.use(favicon(__dirname+'/public/page/favicon.ico'));
//使用日志
server.use(morgan('dev'));
//配置post
server.use(bodyParser.urlencoded({ extended: false }));//设置请求头的类型
server.use(bodyParser.json());//数据以json的形式传输
//处理接口
// server.post('/register',function (req,res) {
//     res.send({error:0,user:req.session.user})
// });
//api拦截,先进行token验证
// server.use(expressJWT({
//     secret:secretOrPrivateKey //上面生成的加密token
// }).unless({
//     path:['/login']  //除了这个地址，其他的URL都需要验证
// }));
// //token失败时候的处理
// server.use(function (err, req, res, next) {
//     //console.log(err);
//     if (err.name === 'UnauthorizedError') {
//         //  这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
//        // res.send({error:1,msg:err.message});
//         res.status(401).send('可能错误了')
//     }
// });





//使用登录路由
server.use(loginRouter);
//配置ejs
server.set('views',__dirname+'/view'); //配置模板的路径
server.engine('html',ejs.__express);//声明html引擎
server.set('view engine','html'); //配置模板引擎 模板类型


//短信验证
AV.init({
    appId:'akY5VBNLIwyzAHzo5BSjyeV1-gzGzoHsz',
    appKey:'0hcYC36VDdiSPi5TH1Cp6zau',
    masterKey:'fCEIftQ3Q7YMCLg9u1e0HE8P',
    serverURLs:'https://aky5vbnl.lc-cn-n1-shared.com'
});

server.post('/getCode',function (req,res) {
    AV.Cloud.requestSmsCode({
        mobilePhoneNumber:req.body.phone,   //目标手机号
        name:'星航健身',                      //主题
        op:'大家一起运动起来,健身搞起来,星航健身房办一年送一年,地址:xxx.',                 //内容
        ttl:5                           //验证码的有效时间
    }).then(function () {
        //调用成功
        res.send({error:0})
    },function () {
        //调用失败
        res.send({error:1,msg:err})
    })
});

//给服务配置端口号
server.listen(8888,function () {
    console.log('服务器启动')
});
