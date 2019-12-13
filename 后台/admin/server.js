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
	name:'qqq', // 默认 connect.sid
	secret: 'myqqq', // session会根据 这个属性 和后端种在session的属性名 来生成对应的字段
	saveUninitialized: false,
	resave: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 30
	}
}));
// app.use(bodyParser.urlencoded({
// 	extended: false
// }));

/*-QUERY DATA-*/


const {
	filterInvalid
} = require('./utils/tools');
app.use(async (req, res, next) => {
	req.jdData = JSON.parse(await readFile('./json/jingdong.json'));
	next();
});


/*-ROUTE-*/
// app.use('/job', require('./routes/job'));


// app.use(bodyParser.urlencoded({extended:true}));
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
// 读取本地存储的用户名和密码
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
app.get('/qqq', (req, res) => {
	res.send({
		qqq: 123
	})
})

app.get('/logs',function(req,res){
   if(req.session.userId){
	   res.send({
		   code:0
	   })
   }
})

// 获取用户详细信息
app.get('/user/info',function(req,res){
	let { userId } = req.body;
	   let isId = req.data.filter(item=>{
		   return item.id == userId
	   })
	   
})

// 登录接口

app.post('/login', function (req, res) {
	let { username, password} = req.body;
	let bol = req.data.some(item => {
		return item.username == username && item.password == password
	});

	if (bol) {
    // console.log(req.session);
	   req.session.userId = username
		res.send({
			code: 0,
			data: {
				name: username
			}
		})
	} else {
		res.send({
			code: 1,
			msg: '用户名密码错误'
		})
	}
})






app.use((req, res) => {
	res.status(404);
	res.send('NOT FOUND!');
});