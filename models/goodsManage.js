const db = require('./content');

let goodsManageSchema = db.Schema({
	orderId: {
   	  type: String,
   	  required:true,
    },
    goodsType: {
   	  type: String,
   	  required:true,
   },
    goodsName: {
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
    putDate: {
   	  type: Date,
   	  required:true,
   },
    phoneNumber: {
   	  type: String,
   	  required:true,
   },
    goodsValue: {
   	  type: String,
   	  required:true,
   },
    notes: {
   	  type: String,
   	  required:true,
   },
    customType: {
   	  type: String,
   	  required:true,
   }
});

// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("goodsManage",goodsManageSchema);