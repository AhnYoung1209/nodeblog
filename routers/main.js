/**
 * Created by sheyude on 2017/5/6.
 * 处理首页请求函数
 */
var express = require("express");
var main = express.Router();



/*
 首页
 req request 客户端请求
 res response 服务器给的响应
 next 函数
 */
main.get('/',function(req, res, next){
    /*
     * 读取views下面的指定文件,并返回给客户端
     * */
    res.render('main/index')

})


//  返回数据
module.exports = main;