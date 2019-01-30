<template>
<div>
	<header class="header">
		<img src="./logo.png" alt="" class="logo">
		<h3 class="title">DP</h3>
	</header>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class myHeader extends Vue{

}
</script>

<style lang="less" src="./header">

</style>