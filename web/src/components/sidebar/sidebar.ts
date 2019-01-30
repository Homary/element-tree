import { Vue, Component } from 'vue-property-decorator';
import api from '@/utils/http';

@Component
export default class mySidebar extends Vue{
	tableListData = [];

	handleOpen(key, keyPath) {
		console.log(key, keyPath);
	}
	
	handleClose(key, keyPath) {
		console.log(key, keyPath);
	}

	mounted(){
		this._getData();
	}

	_getData(){
		let src = 'http://192.168.31.10:9090/list';

		api.getData(src).then( data => {
			this.tableListData = data;
		})
	}
}