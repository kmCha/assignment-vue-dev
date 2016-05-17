var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var Users = require('../database/userModel.js');
// var Profiles = require('../database/profileModel.js');
var fs = require('fs');

router.post('/login', function(req, res) {
	Users.findOne({					//检查数据库中帐号存不存在
		name: req.body.name
	}).then(function(user) {
		if (user) {            //用户存在 检查密码
			var shasum = crypto.createHash('sha1');
			shasum.update(req.body.password);
			var password = shasum.digest('hex');							//同样用sha1加密登陆密码跟数据库中经过sha1加密之后的密码对比
			if (user.password == password) {				//密码正确 添加session
				// req.session.cookie.expires = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);        //只有登陆了才设置session name为帐号，否则为null，浏览器关闭自动销毁（见session.js)
				// req.session.name = user.name;
				user = {
					status: 'success'
				};
				// console.log('hahahahahahahah');
				res.json(user);
			}
			else{  			//密码不正确
				user = {status : "fail"};
				user.msg = "密码不正确";
				res.json(user);
			}
		}
		else{    			//用户不存在
			user = { status : "fail"};
			user.msg = "用户不存在啊，先注册朋友";
			res.json(user);
		}
	});
});


module.exports = router;
