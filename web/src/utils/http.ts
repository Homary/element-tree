import axios from 'axios';
import qs from 'qs';

class Api {
	ip_addr: string;
	saveModify_addr: string;

	constructor(){
		this.saveModify_addr = '/update';
	}
	saveModify(data){
		return axios.post(this.saveModify_addr, JSON.stringify(data))
			.then( res => {
				return Promise.resolve(res.data);
			})
	}
}

export default new Api();