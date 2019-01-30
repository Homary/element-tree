import axios from 'axios';
import qs from 'qs';

class Api {
	ip_addr: string;
	data_inter: string;
	post_data_inter: string;

	constructor(){
		this.data_inter = '/data';
		this.post_data_inter = '/list/add';
	}

	getData(src){
		return axios.get(src)
			.then( res => {
				return Promise.resolve(res.data);
			})
	}

	postData(src, data){
		return axios.post(src, data)
			.then( res => {
				return Promise.resolve(res)
			})
	}
}

export default new Api();