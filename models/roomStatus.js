// 获取操作数据库的 "话柄"
const db = require('./content');

let roomStatusSchema = db.Schema({
  changeDate: {
  	 type: Date,
  	 required: true,
  },
  oldStatus: {
  	 type: String,
  	 required: true,
  },
  newStatus: {
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
module.exports = db.model("roomStatus",roomStatusSchema);