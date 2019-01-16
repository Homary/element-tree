const http = require('http');
const app = require('../app');

let serve = http.createServer(app);

serve.listen(9090, () => {
	console.log('Server is running at localhost:9090')
})