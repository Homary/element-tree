<template>
	<div class="sidebar-box">
		<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" text-color="#fff" :router="true" active-text-color="#ffd04b">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span>Excel</span>
				</template>
				<el-menu-item-group>
					<el-menu-item :index="item.index" v-for="item of tableListData" :key="item.index" :route="{ path: item.index, query: {type: item.type, src: item.src} }">
						<i :class="item.class"></i>
						<span slot="title">{{item.name}}</span>
					</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span>Word</span>
				</template>
				<el-menu-item-group>
					<!-- <el-menu-item :index="item.index" v-for="item of barData" :key="item.index" :route="{ path: item.index, query: {type: item.type, src: item.src} }">
						<i :class="item.class"></i>
						<span slot="title">{{item.name}}</span>
					</el-menu-item> -->
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
		<router-link to="/add"><img src="./add.png" alt="" class="sidebar-add-img"></router-link>
	</div>
</template>
<script lang="ts" src="./sidebar.ts">
</script>
<style lang="less" src="./sidebar.less">
</style>