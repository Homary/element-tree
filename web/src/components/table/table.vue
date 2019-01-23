<template>
	<div class="table-box">
		<div class="table-row" v-for="(item, index) of tableData">
			<input class="table-column-item" type="text" :prop="props[index % 2]" v-model="item[props[index % 2]]"/>
		</div>
	</div>
</template>
<script lang="ts" src="./table.ts">
</script>
<style lang="less" src="./table.less">
</style>