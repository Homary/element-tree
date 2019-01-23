import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import eventBus from '@/utils/eventBus';

@Component
export default class Table extends Vue {
	tableData = [];
	columns = 0;
	props = [];

	created(){
		this.initTable();
	}
	mounted(){
		this.eventListener();
		this.createTable();
	}

	splitParams(data){
		let _data = data.split('|');
		let props = [];
			
		for(let i of _data){
			props.push(i.trim());
		}

		return {
			props
		};
	}

	initTable(){
		let query = this.$route.query,
			params = query.params,
			row_length = query.row,
			datas = this.splitParams(params);

		this.tableData = [];
		this.columns = datas.props.length;
		this.props = datas.props;

		for(let i=0, l=Number(row_length); i<l; i++){
			for(let j=0, _l=datas.props.length; j<_l; j++){
				this.tableData.push({
					[datas.props[j]]: ''
				})
			}
		}
	}

	createTable(){
		let doms: any = document.getElementsByClassName('table-box');

		doms[0].style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
	}

	eventListener(){
		eventBus.$on('submit-data', () => {
			console.log(this.tableData);
		})
	}

	@Watch('query')
	queryChange(newVal, oldVal){
		this.initTable();
		this.createTable();
	}

	get query(){
		return this.$route.query;
	}
}