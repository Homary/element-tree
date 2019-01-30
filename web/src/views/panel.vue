<template>
<div class="panel-box">
	<div class="table-wrapper">
		<showTable :type="active_type" :src="src"></showTable>
		<showTable :type="active_type" :src="src"></showTable>
		<showTable :type="active_type" :src="src"></showTable>
		<showTable :type="active_type" :src="src"></showTable>
		<showTable :type="active_type" :src="src"></showTable>
	</div>
</div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import showTable from '@/components/show/table.vue';

@Component({
	components: {
		showTable
	}
})
export default class Panel extends Vue{
	name: string = 'panel';

	get query(){
		return this.$route.query;
	}
	get active_type(){
		return this.$route.query.type;
	}
	get src(){
		return this.$route.query.src;
	}

	@Watch('query')
	routeChange(newVal, oldVal){
		console.log(newVal);
	}

	created(){

	}

}
</script>

<style lang="less">
.panel-box{
	.fullWH();
	position: relative;
	padding: @mainPadding;
	box-sizing: border-box;
	.table-wrapper{
		height: calc(100% - 15px);
		overflow-y: scroll;
	}
}
</style>