const path = require('path');
const fs = require('fs');

module.exports = function(res) {
	res.writeHead(200, {'Content-Type': 'text/x-javascript; charset=utf-8'});

	fs.readFile(path.resolve(__dirname, '../data/list.json'), 'utf-8', (err, data) => {
		if(err){
			console.error(err);
		}else{
			res.write(data, 'utf-8');
			res.end();
		}
	})
}