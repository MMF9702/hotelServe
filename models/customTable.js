// 获取操作数据库的 "话柄"
const db = require('./content');

let customSchema = db.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    identifierType:{
        type:String, // 身份证类型
        required:false
    },
    identifierNumber:{ // 身份证号码
        type:String,
        required:false
    }
});

// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("custom",customSchema);