const CONFIG = require('./config'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	qs = require('qs'),
	{ readFile, writeFile } = require('./promiseFs');
const multiparty = require('multiparty');

/*-CREATE SERVER-*/
const express = require('express'),
	app = express();
app.listen(CONFIG.PORT, () => {
	console.log(`当前服务 起于${CONFIG.PORT}端口`);
});

/*-MIDDLE WARE-*/
app.use((req, res, next) => {
	const {
		ALLOW_ORIGIN,
		CREDENTIALS,
		HEADERS,
		ALLOW_METHODS
	} = CONFIG.CROS;
	res.header("Access-Control-Allow-Origin", ALLOW_ORIGIN);
	res.header("Access-Control-Allow-Credentials", CREDENTIALS);
	res.header("Access-Control-Allow-Headers", HEADERS);
	res.header("Access-Control-Allow-Methods", ALLOW_METHODS);
	req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});
app.use(session({
	name: 'qqq', // 默认 connect.sid
	secret: 'myqqq', // session会根据 这个属性 和后端种在session的属性名 来生成对应的字段
	saveUninitialized: false,
	resave: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 30
	}
}));



const {
	filterInvalid
} = require('./utils/tools');
app.use(async (req, res, next) => {
	req.jdData = JSON.parse(await readFile('./json/jingdong.json'));
	next();
});


// 把前端输入的用户名密码拿到  存到req.body
app.use((req, res, next) => {

	let str = '';
	req.on('data', (chunk) => {
		str += chunk;
	})
	req.on('end', () => {
		let obj = {};
		try {
			obj = JSON.parse(str)
		} catch (error) {
			obj = qs.parse(str)
		}

		req.body = obj;
		next();
	})
})

app.get('/jingdong/pic', (req, res) => {
	let data = req.jdData;

	res.send({
		code: 0,
		data: data
	});
});
// 读取本地存储的用户信息
app.use((req, res, next) => {
	readFile('./json/user.json').then(data => {
		req.data = JSON.parse(data);
		next()
	}).catch(err => {
		// 读取失败 给前端500
		res.status(500);
		res.send('');
	})
})


 
app.get('/isLogin', function (req, res) {
	if (req.session.userId) {
		res.send({
			code: 0,
			img:req.data
		})
	} else {
		res.send({
			code: 1
		})
	}
})

app.use((req, res, next) => {
    readFile('./json/searchClass.json').then(data => {
        req.searchData = JSON.parse(data);
        console.log(req)
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})
app.use((req, res, next) => {
    readFile('./json/classify.json').then(data => {
        req.classifyData = JSON.parse(data);
        console.log(req)
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})
// 获取用户详细信息
app.get('/user/info', function (req, res) {
	let { userId } = req.body;
	let isId = req.data.filter(item => {
		return item.id == userId
	})
})

// 注册接口
app.post('/sign', function (req, res) {
	let { username, password } = req.body;
	let data = req.data;
	let judge = data.some(item => {
		return item.username == username
	})
	if (judge) {
		res.send({
			code: 1,
			msg: 'already'
		})
		return;
	}
	data.push(req.body);
	writeFile('./json/user.json', JSON.stringify(data)).then(data => {
		// 写入成功
		res.send({
			code: 0,
			data: 'success'
		})
	}).catch(() => {
		res.send({
			code: 1,
			data: 'fail'
		})
	})

})

// 登录接口

app.post('/login', function (req, res) {
	let { username, password } = req.body;
	let bol = req.data.some(item => {
		return item.username == username && item.password == password
	});

	if (bol) {
		// console.log(req.session);
		req.session.userId = username
		res.send({
			code: 0,
			data: {
				name: username,
				img:req.data.img
			}
		})
	} else {
		res.send({
			code: 1,
			msg: '用户名密码错误'
		})
	}
})



// 清除Session
app.post('/delSession', function (req, res) {
	// req.session.removeAttribute(req.session.userId)
	req.session.userId = null;
	if (!req.session.userId) {
		res.send({
			code: 0,
		})
	}
})


app.get('/search', function (req, res) {
    console.log(666)
    res.send({
        code: 0,
        data: req.searchData

    })
})
app.get('/classify', function (req, res) {
    console.log(666)
    res.send({
        code: 0,
        data: req.classifyData

    })
})





app.use((req, res) => {
	res.status(404);
	res.send('NOT FOUND!');
});