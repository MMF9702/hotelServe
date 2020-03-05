const express = require("express");
const Router = express.Router();
const path = require('path');
const crypto = require('crypto');
const JsonWebToken = require("jsonwebtoken");
const mySecret = "GIZs5Oop!!3B#YjF#mk#malhutFMMc#^";
const allRegExp = require(path.join(__dirname,"../../public/javascripts/RegExp"));

// 数据表
const customTable = require(path.join(__dirname,'../../models/customTable')); // 管理员表
const roomTable = require(path.join(__dirname,'../../models/room')); // 房间表

function sha512ToPassword(str) {
    let sha512 = crypto.createHash('sha512');
    let cryptoAfterPassword = sha512.update(str).digest('hex');
    return cryptoAfterPassword;
}

// 登录接口
Router.post('/login',function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*"); // 允许请求跨域
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT, GET,POST");

    var {username,password} = req.body;
    // 1): 检查登录字段是否正确
    if (username==undefined||password==undefined){
        res.send({
            errorCode:4,
            loginFlag:false,
            message:"请填写完整的信息..."
        });
    }
    // 2):检查数据库里是否有该用户
    customTable.findOne(
        {
            username:username
        }
    ).exec(function (error,result) {
        if (error){ // 程序出错
            res.send({
                errorCode:3,
                loginFlag:false,
                message:"系统繁忙请重试..."
            });
            return;
        }
        // 检验是否存在该用户
        if(result==null||result.username==undefined){
            res.send({
                errorCode:1,
                loginFlag:false,
                message:"请先注册账号..."
            });
            return;
        }
        // 检验密码是否正确
        let sha512Password = sha512ToPassword(password);
        if (sha512Password!==result.password){
            res.send({
                errorCode:2,
                loginFlag:false,
                message:"用户名或密码错误..."
            });
            return;
        }else{
            let createTime = Math.floor(Date.now()/1000);
            res.send({
                errorCode:0,
                loginFlag:true,
                message:"登录成功",
                token: JsonWebToken.sign({
                    'type':'JWT',
                    'alg': 'HS256',
                    data: JSON.stringify({
                        username:username,
                        customType:"VIP",
                        age:23,
                        registerDate:"2018/02/01"
                    })
                }, mySecret, {
                    expiresIn: 60 * 1
                })
            });
            return;
        }

    })
});

// 注册接口
Router.post('/register',function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*"); // 允许请求跨域
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT, GET,POST");

    console.log(req.body);
    let { username,useremail,password } = req.body;
    console.log(`username  ${username}  useremail  ${useremail}  password  ${password}`);
    // 检查用户填写的字段是否完整
    if (username=='undefined'||username==''||useremail=='undefined'||useremail==''||password=='undefined'||password==''){
        res.send({
            errorCode:2,
            registerFlag:false,
            message:"注册失败，请填写完整信息"
        });
        return;
    }
    console.log(!allRegExp.phoneNumberRegExp.test(username),!allRegExp.emailRegExp.test(useremail),!allRegExp.passwordRegExp.test(password));
    if (!allRegExp.phoneNumberRegExp.test(username)||!allRegExp.emailRegExp.test(useremail)||!allRegExp.passwordRegExp.test(password)){
        res.send({
            errorCode:2,
            registerFlag:false,
            message:"注册失败，请填写正确的注册信息"
        });
        return;
    }

    // 查询数据库，看当前 用户名 是否存在
    customTable.find({
        username:username
    }).exec(function (error,result) {
        if (error){ // 提示用户程序出错
            res.send({
                errorCode:1,
                registerFlag:false,
                message:"系统繁忙中，请稍后重试..."
            });
            return;
        }
        if (result.length>0){
            res.send({
                errorCode:1,
                registerFlag:false,
                message:"注册失败，该用户已存在"
            });
            return;
        } else {
            // 将数据写入数据库
            let customData = new customTable({
                username:username,
                useremail:useremail,
                password:sha512ToPassword(password)
            });
            customData.save((error, result)=>{
                if (error){
                    res.send({
                        errorCode:1,
                        registerFlag:false,
                        message:"系统繁忙中，请稍后重试..."
                    });
                    return;
                }
                res.send({
                    errorCode:0,
                    registerFlag:true,
                    message:"注册成功！"
                });
                return;
            });
        }
    })
});

// 房务管理页面获取全部房间信息的接口
Router.get('/getAllRoomInfo',(req,res,next)=>{
    // 允许请求跨域
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT, GET,POST");

    console.log(req.body);

    res.send({
        errorCode: '错误码',
        message: '说明信息',
        roomList: "所有房间的信息"
    });
});


Router.use('/page',require('./page'));

module.exports = Router;
