/* //获取图片与数据
route.get('/pic', (req, res) => {
	let data = req.$userDATA;
	data = data.map(item => {
		return {
			id: item.id,
            pic: item.pic,a,
            dk: item.dk
		}
	});
	if (data.length > 0) {
		res.send(success(true, {
			data: data
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
}); */