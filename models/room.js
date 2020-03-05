// 获取操作数据库的 "话柄"
const db = require('./content');

let roomSchema = db.Schema({
	roomNum: {
	  type:String,
      required:true
	},
	roomType: {
	  type:String,
      required:true
	},
	roomStatus: {
	  type:String,
      required:true,
      default: '空净'
	},
	roomLevel: {
	  type:Number,
      required:true,
      min: 1,
	},
	roomPrice: {
	  type:Number,
      required:true,
      min: 0,
	},
	localMsg: {
	  type:String,
      required:true
	},
	lockFlag: {
	  type:Boolean,
      required:true,
      default: false,
	},
	repairFlag: {
	  type:Boolean,
      required:true,
      default: false,
	},
	havePersonFlag: {
	  type:Boolean,
      required:true,
      default: false,
	},
	lockText: {
	  type: String,
	  required: false,
	  default: '无'
	},
	repairText: {
	  type: String,
	  required: false,
	  default: '无'
	},
	notes: {
	  type: String,
	  required: false,
	  default: '无'
	}
});

// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("room",roomSchema);