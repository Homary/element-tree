<template>
	<div class="add-box">
		<header class="add-header">
			<div class="add-input-name">
				<el-input placeholder="请输入名称" v-model="sub_data.name"></el-input>
			</div>
			<el-dropdown @command="(type) => {this.sub_data.type=type}" class="add-content-type">
				<el-button type="primary">
					{{sub_data.type}}<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item :command="item.type" v-for="item of typeDatas" :key="String(item.type)">{{item.name}}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<div class="add-data-address">
				<el-input placeholder="请输入数据接口" v-model="sub_data.src"></el-input>
			</div>
			<el-dropdown @command="(func) => {this.sub_data.func = func}" class="add-data-type">
				<el-button type="primary">
					{{sub_data.func}}<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item :command="item.type" v-for="item of getDatas" :key="String(item.type)">{{item.name}}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<div class="add-route">
				<el-input placeholder="请输入路由" v-model="sub_data.index"></el-input>
			</div>
		</header>
		<div>
			<el-button style="width: 80px; position: absolute; bottom: 15px; right: 15px" type="primary" @click="submitData">提交</el-button>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import eventBus from '@/utils/eventBus';
import api from '@/utils/http';

@Component
export default class Add extends Vue {
	sub_data = {
		index: '',
		name: '',
		src: '',
		type: '内容类型',
		func: '获取方式'
	};
	typeDatas = [{
			name: '表格',
			type: 'table'
		},
		{
			name: '未开发',
			type: 'todo'
		}
	];
	getDatas = [
		{
			name: 'API',
			type: 'api'
		},
		{
			name: '未开发',
			type: 'todo'
		}
	];

	submitData() {
		let src = '/list/add';

		this.sub_data.index = '/panel' + this.sub_data.index;

		api.postData(src, this.sub_data)
			.then( res => {
				console.log(src);
			})
	}
}
</script>
<style lang="less">
@inputMarginRight: 10px;

.add-box {
	height: @mainHeight;
	padding: @mainPadding;
	box-sizing: border-box;

	.add-header {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-auto-rows: minmax(30px, auto);
		grid-template:
			"tl tl tl tr tr"
			"si si si sr sr"
			"rl rl rl .   .";
		grid-row-gap: @inputMarginRight;
		width: 60%;
		margin: 0 auto;

		.add-input-name {
			grid-area: tl;
			margin-right: @inputMarginRight;
		}

		.add-content-type {
			grid-area: tr;
			.el-button {
				width: 100%;
			}
		}

		.add-data-address {
			grid-area: si;
			margin-right: @inputMarginRight;
		}
		.add-data-type{
			grid-area: sr;
			.el-button {
				width: 100%;
			}
		}
		.add-route{
			grid-area: rl;
			margin-right: @inputMarginRight;
		}
	}

	.el-dropdown {
		vertical-align: top;
	}

	.el-dropdown+.el-dropdown {
		margin-left: 15px;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}
}
</style>