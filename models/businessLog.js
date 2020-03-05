const db = require('./content');

let businessLogSchema = db.Schema({
   orderId: {
   	  type: String,
   	  required:true,
   },
   logType: {
   	  type: String,
   	  required:true,
   },
   customName: {
   	  type: String,
   	  required:true,
   },
   roomNum: {
   	  type: String,
   	  required:true,
   },
   accountsType: {
   	  type: String,
   	  required:true,
   },
   accountDetail: {
   	  type: String,
   	  required:true,
   	  max: 150,
   },
   operatorDate: {
   	  type: Date,
   	  required:true,
   },
   operatorMan: {
   	  type: String,
   	  required:true,
   },
   logNote: {
   	  type: String,
   	  required:true,
   },
   
});

// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("businessLog",businessLogSchema);