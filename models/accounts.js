// 获取操作数据库的 "话柄"
const db = require('./content');

let accountSchema = db.Schema({
	accountType: {
	  type: String,
	  required: true,
	},
	payType: {
	  type: String,
	  required: true,
	},
	payDate: {
	  type: Date,
	  required: true,
	},
	customName: {
	  type: String,
	  required: true,
	},
	operatorName: {
	  type: String,
	  required: true,
	},
	roomNum: {
	  type: String,
	  required: true,
	},
	accountDetail: {
	  type: String,
	  required: true,
	},
	expendTotal: {
	  type: String,
	  required: true,
	},
	notes: {
	  type: String,
	  required: true,
	},
});

// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("account",accountSchema);