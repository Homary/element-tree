<template>
<div class="app">
	<app-header class="app-header"></app-header>
	<app-sidebar class="app-sidebar"></app-sidebar>
	<div class="router-view">
		<router-view></router-view>
	</div>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/header/header.vue';
import Sidebar from '@/components/sidebar/sidebar.vue';

@Component({
	components: {
		'app-header': Header,
		'app-sidebar': Sidebar
	}
})
export default class App extends Vue{
	
}
</script>

<style rel="stylesheet/less" lang="less">

html,body{
	.fullWH();
	color: @commonFontColor;
	font-size: @commonFontSize !important;
	.app{
		display: flex;
		flex-wrap: wrap;
		position: relative;
		width: 80%;
		margin: 0 auto;
		background-color: @commonBgColor;
		.app-header{
			flex: 0 0 100%;
		}
		.app-sidebar{
			width: @sidebarWidth;
			height: @mainHeight;
		}
		.router-view{
			width: calc(100% - @sidebarWidth);
			height: @mainHeight;
			background-color: @mainBgColor;
			color: @mainFontColor;
		}
	}
}
</style>