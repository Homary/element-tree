<template>
	<div class="wrapper">
		<div class="input-box">
			<el-input v-for="(val, key) in rowData" v-model="myRowData[key]" :key="String(key)" :placeholder="myRowData[key]"></el-input>
			<div class="btns-box">
				<el-button type="info" @click="$emit('cancleRowData')">取消</el-button>
				<el-button type="primary" @click="$emit('changeRowData', myRowData)">确定</el-button>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class tableRow extends Vue {
	
	@Prop(Object) rowData!: object;

	get myRowData() {
		return Object.create(this.rowData);
	}
}
</script>
<style lang="less">
.wrapper {
	height: 100%;

	.input-box {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;

		.btns-box {
			align-self: flex-end;
			display: flex;
			justify-content: flex-end;
			width: 85%;
			.el-button {
				width: 40%;
			}
		}

	}
}
</style>