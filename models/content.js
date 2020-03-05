// 1):连接数据库
var mongoose = require('mongoose');
// 2):使用 connect() 方法获得待定连接
mongoose.connect(
    "mongodb://localhost:27017/hotelData",
    {
        useNewUrlParser:true,
        useCreateIndex:true
    }
);
// 3):连接数据库
var db = mongoose.connection;
// 4):监听连接失败事件
db.on('error',function (error) {
    console.log(error);
});
// 5):监听数据库连接事件
db.on('open',function () {
    console.log('数据库连接成功...');
});
// 6):向外暴露操作数据库的变量
module.exports = mongoose;