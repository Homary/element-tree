<template>
	<div v-show="type === name" class="show-table-box">
		<el-table :data="tableData.slice(1)" border style="width: 100%">
			<el-table-column :prop="key" :label="value" :key="String(key)" v-for="(value, key)  in tableData[0]">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="150">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small" @click="editClick(scope.row, scope.$index)">编辑</el-button>
					<el-button @click.native.prevent="deleteRow(scope.$index + 1, tableData)" type="text" size="small">
						移除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<img src="./add.png" alt="" class="panel-add-img" @click="addRowData">
		<div class="table-row-wrapper" v-show="rowData">
			<table-row class="table-row-edit-box" :rowData="rowData" @changeRowData="editedRowData" @cancleRowData="cancelEdit"></table-row>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import api from '@/utils/http';
import tableRow from '@/components/edit/tableRow.vue';

@Component({
	components: {
		tableRow
	}
})
export default class ShowTable extends Vue {
	name: string = 'table';
	rowData: any = null;
	editRowIndex: number = -1;

	@Prop(String) type: string;
	@Prop(String) src: string;

	tableData = []; // 表格数据,第一项为表头

	created() {
		this._setData(this.src);
	}

	/**
	 * 获取表格数据
	 * @param {string} src 请求地址
	 */
	_setData(src) {
		api.getData(src).then(data => {
			this.tableData = data;
		})
	}

	/**
	 * 点击行查看时操作
	 * @param  {object} row 该行数据
	 * @return {void}     
	 */
	handleClick(row) {
		console.log(row)
	}

	/**
	 * 删除某一行
	 * @param  {number} index 该行位置
	 * @param  {array} data  表格数据
	 * @return {void}       
	 */
	deleteRow(index, data) {
		console.log(index, data);

		data.splice(index, 1);
	}

	/**
	 * 编辑某一行数据
	 * @param  {objece} row   该行数据
	 * @param  {number} index 该行位置
	 * @return {void}       
	 */
	editClick(row, index) {
		console.log(row);
		console.log(index);

		this.rowData = (<any>Object).assign({}, row);
		this.editRowIndex = index + 1; // 0是表头
	}

	/**
	 * 确定更改
	 * @param  {object} newData 更改后数据
	 * @return {void}         
	 */
	editedRowData(newData){
		console.log(newData);

		// 编辑
		if(this.editRowIndex !== -1){
			this.tableData.splice(this.editRowIndex, 1, newData);
		}else{

			// 添加
			this.tableData.push(newData);
		}

		this.rowData = null;
		this.editRowIndex = -1;

		return;
	}

	/**
	 * 取消更改
	 * @return {void} 
	 */
	cancelEdit(){
		this.rowData = null;
		this.editRowIndex = -1;
	}

	/**
	 * 添加行
	 */
	addRowData(){
		this.rowData = (<any>Object).assign({}, this.tableData[0]);
	}
}
</script>
<style lang="less">
.show-table-box {
	width: calc(100% - 15px);
	margin-top: 15px;
	border-bottom: 10px dotted @headBgColor;
	overflow: auto;
	.table-row-wrapper {
		.square(100%);
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(128, 128, 128, .6);
		z-index: 999;
	}

	.panel-add-img {
		.square(50px);
		float: right;
		margin: 15px 0 20px 0;
	}

	.table-row-edit-box {
		.square(50%);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>