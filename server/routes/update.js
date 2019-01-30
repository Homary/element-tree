const path = require('path');
const fs = require('fs');

module.exports = async function(res, params) {
	// if( Object.prototype.toString.call(params) !== '[object String]' || 
	// 	Object.prototype.toString.call(JSON.parse(params)) !== '[object Array]' ){
	// 	res.end('data error');
	// 	return;
	// }
	let dataPath = path.resolve(__dirname, '../data/data.json');

	fs.readFile(dataPath, (err, data) => {
		let _data = JSON.parse(data);

		_data.push(JSON.parse(params));

		fs.writeFile(dataPath, JSON.stringify(_data), 'utf-8', err => {
			if(err) res.end('wrote error');

			else res.end('success');
		})
	})
}

function read(path){
	return new Promise( (resolve, reject) => {
		fs.readFile(path, 'utf-8', (err, data) => {
			if(err) reject(err);
			resolve(data);
		})
	})
}

function write(path, data) {
	return new Promise( (resolve, reject) => {
		fs.writeFile(path, data, 'utf-8', (err) => {
			if(err) reject(err)
		});
	})
}