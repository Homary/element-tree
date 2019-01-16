import axios from 'axios';
import { Vue, Component } from 'vue-property-decorator';

declare module 'vue/types/vue' {
	interface Vue {
		getData();
	}
}

const data_port = '/data';

@Component
export default class myMixins extends Vue {
	getData(){
		return axios.get(data_port)
			.then( res => {
				if(res.status === 200){
					return res.data;
				}else{
					return status;
				}
			})
	}
}