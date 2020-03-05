// 处理页面数据的请求
const express = require('express');
const Router = express.Router();

Router.get('/getIndexData',function (req,res) {
    console.log("进来了...");
    res.send({flag:true});
});


module.exports = Router;