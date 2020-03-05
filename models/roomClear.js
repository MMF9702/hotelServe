// 获取操作数据库的 "话柄"
const db = require('./content');

let roomClearSchema = db.Schema({
	clearDate: {
		type: Date,
		required: true,
	},
	clearMan: {
		type: String,
		required: true,
	},
	roomNum: {
		type: String,
		required: true,
	},
	roomType: {
		type: String,
		required: true,
	},
	operatorMan: {
		type: String,
		required: true,
	},
	notes: {
		type: String,
		required: false,
		default: '无'
	}
});

// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("roomClear",roomClearSchema);