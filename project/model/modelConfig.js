//写数据操作的
//引入数据库
var mysql=require('mysql');

//mysql配置
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'web207'
});

module.exports=db;