<template>
	<div class="add-wrapper">
		<div class="custom-tree-container">
			<div class="block">
				<p>项目管理</p>
				<el-tree :data="data" node-key="id" default-expand-all :expand-on-click-node="false">
				<span class="custom-tree-node" slot-scope="{ node, data }">
    				<span @click= "editLabel">{{ node.label }}</span>
    				<input 
    					type="text" 
    					class="edit-input"
    					:id="'input'+node.id" 
    					v-show="activeID === node.id"
    					v-model="acitveLabel" 
    					@keyup.enter="enterEdit(node, data)" 
    					@keyup.esc="cancelEdit()" 
    				>
					<span>
						<el-button
						type="text"
						size="mini"
						@click="() => {editLabel(node.id, node.label)}">
						Edit
						</el-button>
						<el-button
						type="text"
						size="mini"
						@click="() => {append(data)}">
						Append
						</el-button>
						<el-button
						type="text"
						size="mini"
						@click="() => {remove(node, data)}">
						Delete
						</el-button>
			        </span>
				</span>
				</el-tree>
			</div>
		</div>
		<div class="btns">
			<router-link to="/" class="btn-back"><el-button type="info">返回查看</el-button></router-link>
			<el-button @click="cancel">取消修改</el-button>
	  		<el-button type="primary" @click="save">保存修改</el-button>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import myMixins from '@/utils/mixins';
import api from '@/utils/http';

@Component({
	mixins: [myMixins]
})
export default class Main extends Vue {
	id: number = 1000;
	activeID: number = -1;
	acitveLabel: string = ''; 
	bakLabel: string = '';
	data: object[] = [];

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
    
	append(data) {
		const newChild = { id: this.id++, label: '新标签', children: [] };
		if (!data.children) {
			this.$set(data, 'children', []);
		}
		data.children.push(newChild);
	}

	remove(node, data) {
		const parent = node.parent;
		const children = parent.data.children || parent.data;
		const index = children.findIndex(d => d.id === data.id);
		children.splice(index, 1);
	}

	renderContent(h, { node, data, store }) {
		return (
			`<span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>`);
	}

	editLabel(id, label){
		document.getElementById(`input${id}`).focus();

		this.activeID = id;
		this.acitveLabel = this.bakLabel = label;
	}

	enterEdit(node, data){
		let id = node.id;
console.log(node.id)

		this.traverseData(id, this.data);
		this.toggleEditInput();
	}

	cancelEdit(){
		this.acitveLabel = this.bakLabel;
		this.toggleEditInput();
	}

	toggleEditInput(){
		this.activeID = -1;
		this.acitveLabel = '';
	}

	traverseData(id, data){

		data.map(item => {
			if(item.$treeNodeId === id){
				item.label = this.acitveLabel;
				return;
			}else if(item.children){
				this.traverseData(id, item.children);
			}
		})
	}

	save(){
		console.log(this.data);
		api.saveModify(this.data)
			.then( data => {
				if(data.result === 200){
					alert('保存成功')
				}else{
					alert(`保存失败:${data}`);
				}
			})
	}

	cancel(){
		this._getData();
	}
}
</script>
<style lang="less">
.add-wrapper{
	.custom-tree-node {
		position:relative;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
		input[id^="input"]{
			position: absolute;
			left: 0;
			background-color: #fff;
		    background-image: none;
		    border-radius: 4px;
		    border: 1px solid #dcdfe6;
		    -webkit-box-sizing: border-box;
		    box-sizing: border-box;
		    color: #606266;
		    display: inline-block;
		    font-size: inherit;
		    height: 40px;
		    line-height: 40px;
		    outline: 0;
		    padding: 0 15px;
		    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
		    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
		    width: 100%;
		}
	}
	.block{
		p{
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-weight: bold;
		}
	}
	.btns{
		display: flex;
		justify-content: flex-end;
		margin-top: 30px;
		.btn-back{
			margin: 0 10px;
		}
	}
}

</style>