<template>
	<div class="main-wrapper">
		<p>首页</p>
		<el-tree
		  class="el-tree-wrapper"
		  :data="data"
		  @node-click="handleNodeClick">
		</el-tree>
		<div class="btn">
			<router-link to="/add"><el-button type="info">编辑</el-button></router-link>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import myMixins from '@/utils/mixins.ts';

@Component({
	mixins: [myMixins]
})
export default class Main extends Vue {
	id: number = 1000;
	data: object[] = [];
	defaultProps: {
          children: 'children',
          label: 'label'
        };

	handleNodeClick(data){
        let label = data.label;
console.log(label)
        if(/http/.test(label)){
        	let index = label.search(/http/);

        	window.open(label.slice(index));
        }
    }

    mounted(){
    	this._getData();
    }

    _getData(){
    	this.getData().then(data => {
    		if(Object.prototype.toString.call(data) === '[object Array]'){
    			this.data = data;
    		}else{
    			alert(`获取数据出错! \n 状态码: ${data}`);
    		}
    	})
    }
}
</script>
<style lang="less">
.custom-tree-node {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	padding-right: 8px;
	input[id^="input"]{
		position: absolute;
		left: 0;
	}
}
.main-wrapper{
	p{
		height: 50px;
		line-height: 50px;
		text-indent: 20%;
		font-weight: bold;
	}
	.btn{
		display: flex;
		margin-top: 30px;
	}
}
</style>