<template>
<div v-show="isActive === name">
	<section class="create-table">
		<el-input placeholder="定义表头字段(字段 | 字段)(如[name | age])"  style="width: calc(100% - 270px)"
		  v-model="table_params"
		></el-input>
		<el-input placeholder="行数" style="width: 80px" v-model="table_rows_length">
		</el-input>
		<el-button style="width: 80px" type="primary" @click="btnClickHandle">
			确定
		</el-button>
	</section>
</div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class EditTable extends Vue{
	table_params: string = '';
	table_rows_length: string = '';
	name: string = 'table';

	@Prop(String) isActive?: string;

	btnClickHandle(){
		this.$router.push({
			path: '/add/table',
			query: {
				params: this.table_params,
				row: this.table_rows_length
			}
		})
	}
}
</script>

<style lang="less">

</style>