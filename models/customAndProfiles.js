// 获取操作数据库的 "话柄"
const db = require('./content');

let customAndProfilesSchema = db.Schema({
  orderId: {
  	type: String,
  	required: true,
  },
  customName: {
  	type: String,
  	required: true,
  },
  birthDay: {
  	type: Date,
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
  gender: {
  	type: String,
  	required: true,
  },
  national: {
  	type: String,
  	required: true,
  },
  phoneNumber: {
  	type: String,
  	required: true,
  },
  identifierType: {
  	type: String,
  	required: true,
  },
  identifierNumber: {
  	type: String,
  	required: true,
  },
  inHotelStatus: {
  	type: Boolean,
  	required: true,
  	boolean: false,
  },
  orderNote: {
  	type: String,
  	required: true,
  },
  customAddress: {
  	type: String,
  	required: true,
  },
  checkInDate: {
  	type: Date,
  	required: true,
  },
  checkOutTime: {
  	type: Date,
  	required: true,
  },
  blacklistFlag: {
  	type: Boolean,
  	required: true,
  	default: false,
  },
  blackReason: {
  	type: String,
  	required: true,
  }
});

// 向外暴露出操作数据表的 "话柄"
module.exports = db.model("customAndProfiles",customAndProfilesSchema);