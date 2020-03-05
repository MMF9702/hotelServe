// 该文件用于存储正则表达式，用于验证代码中的某些字段
const regExp = {
    phoneNumberRegExp:/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
    emailRegExp: new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$'),
    passwordRegExp: new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$")

}

module.exports = regExp;