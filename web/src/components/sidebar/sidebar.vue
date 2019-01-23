<template>
<div class="sidebar-box">
	<el-menu
		class="el-menu-vertical-demo"
		@open="handleOpen"
		@close="handleClose"
		text-color="#fff"
		:router="true"
		active-text-color="#ffd04b">
		<el-menu-item 
		:index="item.index" 
		v-for="item of barData" 
		:key="item.index" 
		>
			<i :class="item.type"></i>
			<span slot="title">{{item.name}}</span>
		</el-menu-item>
	</el-menu>
	<router-link to="add"><img src="./add.png" alt="" class="sidebar-add-img"></router-link>
</div>
</template>

<script lang="ts" src="./sidebar.ts">

</script>

<style lang="less" src="./sidebar.less">

</style>