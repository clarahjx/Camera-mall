//写数据操作的
var db=require('./modelConfig');

var loginModel={
    login: function (user,pass,fn) {
        var sql='select * from user_table where user_name="'+user+'" and user_pass="'+pass+'"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    register:function (user,fn) {
        var sql='select * from user_table where user_name="'+user+'"';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    add:function (user,pass,phone,sex,email,fn) {
        var sql='insert into user_table values(null,"'+user+'","'+pass+'","'+phone+'","'+sex+'","'+email+'",null,null)';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    }
};


module.exports=loginModel;