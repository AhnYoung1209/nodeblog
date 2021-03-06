/**
 * Created by sheyude on 2017/5/6.
 */

// 引入数据库管理模块
var mongoose = require('mongoose');
// 创建用户表结构
// 暴露出去 module.exports
module.exports = new mongoose.Schema({
    username:String,
    password:String,
    email:{
        type:String,
        default:null,
    },
    // 是否是管理员
    isAdmin:{
        type:Boolean,
        default:false,
    },
    // 注册时间
    regTime:{
        type:Date,
        default:  new Date(),
    },
    Admin:{
        type:Boolean,
        default:false,
    }
});