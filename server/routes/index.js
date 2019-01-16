class List {
	'/data' (req, res, params, method){
		require('./data')(res);
	}

	'/update' (req, res, params, method){
		require('./update')(res, params);
	}
}

const routerAttrList = Object.getOwnPropertyNames(List.prototype);

function isRouter(pathname) {
    return routerAttrList.find((item, index) => {

        if(pathname === item || pathname.startsWith(item) && (item !== '/')){
            return item;
        }else{
            return false;
        }
    })
}

module.exports = {
	list: new List(),
	isRouter
}