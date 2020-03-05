const db = require('./content');

let teamSchema = db.Schema({
	orderId: {
		type: String,
		required: true,
	},
	teamName: {
		type: String,
		required: true,
	},
	salesMan: {
		type: String,
		required: true,
	},
	teamNum: {
		type: Number,
		required: true,
	},
	responsibleMan: {
		type: String,
		required: true,
	},
	InRoomList: {
		type: Array,
		required: true,
	}
});

// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("team",teamSchema);