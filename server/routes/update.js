const path = require('path');
const fs = require('fs');

module.exports = function(res, params) {
	if( Object.prototype.toString.call(params) !== '[object String]' || 
		Object.prototype.toString.call(JSON.parse(params)) !== '[object Array]' ){
		res.end('data error');
		return;
	}
	fs.writeFile(path.resolve(__dirname, '../data/data.json'), params, (err) => {
		if(err){
			console.error(err);
		}else{
			let msg = {
				result: 200
			}

			res.end(JSON.stringify(msg));
		}
	});
}