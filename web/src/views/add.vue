<template>
<div class="add-box">
	<header class="add-header">
		<div class="add-input-name"><el-input placeholder="请输入名称" v-model="name"></el-input></div>
		<el-dropdown @command="(type) => {this.active_type = type}">
			<el-button type="primary">
				内容类型<i class="el-icon-arrow-down el-icon--right"></i>
			</el-button>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item :command="item.type" 
				  v-for="item of typeDatas" :key="String(item.type)"
				>{{item.name}}</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</header>
	<editTable :isActive="active_type"></editTable>
	<div class="add-router-view">
		<router-view></router-view>
	</div>
	<div>
		<el-button style="width: 80px; position: absolute; bottom: 15px; right: 15px" type="primary" @click="submitData">提交</el-button>
	</div>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import eventBus from '@/utils/eventBus';
import editTable from '@/components/editTable/editTable.vue';

@Component({
	components: {
		editTable
	}
})
export default class Add extends Vue{
	name: string = '';
	active_type: string = '';
	typeDatas = [
		{
			name: '表格',
			type: 'table'
		},
		{
			name: '未开发',
			type: 'todo'
		}
	];

	submitData(){
		eventBus.$emit('submit-data', {
			name: '',
			type: '',
			index: ''
		});

		this.$router.push({
			path: '/add'
		})
	}
}
</script>

<style lang="less">
.add-box{
	display: flex;
	flex-direction: column;
	height: @mainHeight;
	padding: 20px 0 0 20px;
	box-sizing: border-box;
	.add-header{
		display: flex;
		.add-input-name{
			width: 30%;
			margin-right: 10px;
		}
	}
	.create-table{
		margin: 15px 0;
	}
	.add-router-view{
		width: calc(100% - 100px);
		flex: 1 1 60%;
	}
	.el-dropdown {
		vertical-align: top;
	}
	.el-dropdown + .el-dropdown {
		margin-left: 15px;
	}
	.el-icon-arrow-down {
		font-size: 12px;
	}
}
</style>