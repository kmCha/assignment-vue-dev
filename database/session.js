var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');


exports.connect = function(app){
	app.use(session({
    secret: '12345',
    name: 'user', //这里的name指的是cookie的name，默认cookie的name是：connect.sid
    cookie: {
      maxAge: null
    }, //设置maxAge是null，cookie和session同时过期
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ //创建新的mongodb数据库
			// url: 'mongodb://127.0.0.1/assignments',
			mongooseConnection: mongoose.connection,
      ttl: 7 * 24 * 60 * 60
    })
  }));
};
