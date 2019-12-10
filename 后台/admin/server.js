const CONFIG = require('./config'),
	session = require('express-session'),
	bodyParser = require('body-parser');

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
app.use(session(CONFIG.SESSION));
app.use(bodyParser.urlencoded({
	extended: false
}));

/*-QUERY DATA-*/
const {
	readFile
} = require('./utils/promiseFS');

const {
	filterInvalid
} = require('./utils/tools');
app.use(async (req, res, next) => {
	req.jdData = JSON.parse(await readFile('./json/jingdong.json'));
	next();
});

/*-ROUTE-*/
// app.use('/job', require('./routes/job'));
app.get('/jingdong/pic', (req, res) => {
	let data = req.jdData;
	
		res.send({
			code:0,
			data:data
		});
});
app.use((req, res) => {
	res.status(404);
	res.send('NOT FOUND!');
});