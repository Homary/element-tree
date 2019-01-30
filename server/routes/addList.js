const fs = require('fs');
const path = require('path');

module.exports = function(res, params) {
	let _path = path.resolve(__dirname, '../data/list.json');

	if(!params){
		res.end('no blank');
	}

	fs.readFile(_path, 'utf-8', (err, data) => {
		if(err) console.error(err);

		let _data = JSON.parse(data);

		_data.push(JSON.parse(params));

		fs.writeFile(_path, JSON.stringify(_data), 'utf-8', (err) => {
			if(err) console.error(err);
			res.end('200');
		});
	});
}