import {Vue, Component} from 'vue-property-decorator';

@Component
export default class mySidebar extends Vue{
	barData = [
		{
			type: 'el-icon-menu',
			name: '导航一',
			index: '/one'
		},
		{
			type: 'el-icon-menu',
			name: '导航二',
			index: '/two'
		},
		{
			type: 'el-icon-document',
			name: '导航三',
			index: '/three'
		},
		{
			type: 'el-icon-setting',
			name: '导航四',
			index: '/four'
		}
	]

	handleOpen(key, keyPath) {
		console.log(key, keyPath);
	}
	
	handleClose(key, keyPath) {
		console.log(key, keyPath);
	}
}