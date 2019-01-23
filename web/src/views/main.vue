<template>
<div class="main-box">
	<section>
		<fieldset>
			<legend>2019-01-23 完成基础前端页面</legend>
			<ul>
				<li>头部组件 `header.vue`</li>
				<li>侧边导航栏组件 `sidebar.vue`</li>
				<li>添加页面 `add.vue`
					<ul>
						<li>创建表格组件 `editTable.vue`</li>
					</ul>
				</li>
				<li>表格组件 `table.vue`</li>
			</ul>
		</fieldset>
	</section>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

export default class Main extends Vue{

}
</script>

<style lang="less">
.main-box{
	width: calc(100% - 50px);
	padding: 15px 0 0 15px;
	legend{
		font-size: 130%;
		font-weight: bolder;
		color: orange;
	}
	ul{
		list-style-type: circle;
	}
	li{
		margin: 10px 0;
	}
	li ul{
		margin-left: 30px;
	}
}
</style>