let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let expressJWT = require('express-jwt');
const mySecret = "GIZs5Oop!!3B#YjF#mk#malhutFMMc#^";
let ignoreAPI = require(path.join(__dirname,'ignoreAPI.js'));

// 处理用户请求的路由文件
let customRouter = require('./routes/customAPI/index.js');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 拦截请求，对 API 接口设置保护
app.use(expressJWT({
  secret:mySecret
}).unless({ // 设置不需要 token 的 API 接口
  path:[
    "/custom/login",
    "/custom/register",
    ...ignoreAPI
  ]
}));

// 查看请求里是否有 token
app.use(function (err, req, res, next) {
  console.log(err);
  if (err.name === 'UnauthorizedError') {   
      //  这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
    res.status(401).send('invalid token...');
  }
});

app.use('/custom', customRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3030,error =>{
  if (error){
    console.log(error)
  }else {
    console.log("serve is running in port 3000.");
  }
})
