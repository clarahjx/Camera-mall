//手机号码正则
var phoneNumberReg=/^1[356789]\d{9}$/;
//名字正则
var nameReg=/^[\u4e00-\u9fa5]{2,6}$/;
//邮箱正则
var mailReg=/[a-z0-9A-Z][- | a-z0-9A-Z . _]{2,19}@[a-z0-9A-Z]{2,20}(\.[a-z]{2,}){1,2}/;
//部门详情正则
var depDetailsReg=/^([\u4E00-\u9FA5A-Za-z0-9])*$/u;
//部门名字正则
var depNameReg=/^[\u4E00-\u9FA50-9]{3,10}$/;
//部门人数正则
var depNumberReg=/^\d{0,}$/;
//姓名
var studentNameReg=/^[\u4E00-\u9FA5]{2,4}$/;
//学号，年龄
var studentStuAge= /^[0-9]{1,2}$/;
//地址,姓名，关系
var studentAddNamRel=/^[\u4E00-\u9FA5]{2,10}$/;