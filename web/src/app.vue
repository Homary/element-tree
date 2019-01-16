<template>
<div class="app">
<router-view class="router-view"></router-view>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

export default class App extends Vue{
	
}
</script>

<style rel="stylesheet/less" lang="less">
html,body{
	color: #FFF;
	font-size: 130% !important;
	.app{
		position: absolute;
		width: 100%;
		height: 100%;
		background: url('./assets/主页底图.jpg');
		background-size: 100% 100%;
		.router-view{
			position: relative;
			width: 60%;
			margin-left: 20%;
			z-index: 999;
		}
	}
}
</style>