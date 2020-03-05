// 获取操作数据库的 "话柄"
const db = require('./content');

let orderSchema = db.Schema({
   orderId: {
   	  type: String,
   	  required:true,
   },
   orderType: {
   	  type: String,
   	  required:true,
   },
   checkOutTime: {
   	  type: Date,
   	  required:true,
   },
   orderSource: {
   	  type: String,
   	  required:true,
   },
   customSourceType: {
   	  type: String,
   	  required:true,
   },
   checkInDate: {
   	  type: Date,
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
   roomType: {
   	  type: String,
   	  required:true,
   },
   gender: {
   	  type: String,
   	  required:true,
   },
   national: {
   	  type: String,
   	  required:true,
   },
   phoneNumber: {
   	  type: String,
   	  required:true,
   },
   bookDate: {
   	  type: Date,
   	  required:true,
   },
   identifierType: {
   	  type: String,
   	  required:true,
   },
   identifierNumber: {
   	  type: String,
   	  required:true,
   },
   inHotelStatus: {
   	  type: Boolean,
   	  required:true,
   },
   payStatus: {
   	  type: Boolean,
   	  required:true,
   },
   orderNote: {
   	  type: String,
   	  required:true,
   },
   salesMan: {
   	  type: String,
   	  required:true,
   },
   inHotelDays: {
   	  type: Number,
   	  required:true,
   },
   cartNumber: {
   	  type: String,
   	  required:true,
   },
   expendTotal: {
   	  type: String,
   	  required:true,
   },
   customAddress: {
   	  type: String,
   	  required:true,
   },
   accountsType: {
   	  type: String,
   	  required:true,
   },
   businessDescription: {
   	  type: String,
   	  required:true,
   },
   businessNotes: {
   	  type: String,
   	  required:true,
   }
});


// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("order",orderSchema);