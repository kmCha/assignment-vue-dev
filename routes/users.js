var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var Users = require('../database/userModel.js');
// var Profiles = require('../database/profileModel.js');

router.get('/loggedIn', function (req, res) {
	res.send(req.session.name);
})

router.get('/logOut', function (req, res) {
	req.session.cookie.expires = new Date(Date.now());
	req.session.destroy()
	res.json({
		status: 'success'
	})
})

router.post('/signUp', function(req, res) {
	Users.findOne({
		name: req.body.name
	}).then(user => {
		if (user) {
			res.json({
				status: 'fail',
				msg: '此账号已存在，请重新输入'
			})
		} else {
			var shasum = crypto.createHash('sha1')							//sha1不可逆加密密码然后再保存
			shasum.update(req.body.password)
			var password = shasum.digest('hex')
			Users.create({
				name: req.body.name,
				password: password
			}).then(user => {
				req.session.cookie.expires = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);        //只有登陆了才设置session name为帐号，否则为null，浏览器关闭自动销毁（见session.js)
				req.session.name = user.name;
				res.json({
					status: 'success',
					msg: '注册成功，自动登录...'
				})
			})
		}
	})
})

router.post('/logIn', function (req, res) {
	Users.findOne({					//检查数据库中帐号存不存在
		name: req.body.name
	}).then(function(user) {
		if (user) {            //用户存在 检查密码
			var shasum = crypto.createHash('sha1');
			shasum.update(req.body.password);
			var password = shasum.digest('hex');							//同样用sha1加密登陆密码跟数据库中经过sha1加密之后的密码对比
			if (user.password === password) {				//密码正确 添加session
				req.session.cookie.expires = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);        //只有登陆了才设置session name为帐号，否则为null，浏览器关闭自动销毁（见session.js)
				req.session.name = user.name;
				user = {
					status: 'success',
					msg: user.name + '，欢迎回来'
				};
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
