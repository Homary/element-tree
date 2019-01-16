const url = require('url');
const querystring = require('querystring');
const routes = require('./routes/index');
const send = require('send');
const parseUrl = require('parseurl');

function handle(req, cb) {
	let data = '';

	req.on('err', err => {
		console.error(err);
	}).on('data', chunk => {
		data += chunk;
	}).on('end', () => {
		requestHandle(req, data, cb);
	})
}

function requestHandle(req, data, cb) {
	switch(req.method){
		case 'GET':
			let query = url.parse(req.url, true).query;

			cb(query);
			break;

		case 'POST':
			cb(data);
			break;

		default:
			break;
	}
}

function routeHandle(req, res, params) {	
	let pathname = url.parse(req.url, true).pathname,
		routerItme = routes.isRouter(pathname);

	if(routerItme){
		return routes.list[pathname](req, res, params, req.method);
	}else{
		send(req, parseUrl(req).pathname, {root: './build/'})
			.pipe(res);
	}
}

module.exports = {
	handle,
	routeHandle
}