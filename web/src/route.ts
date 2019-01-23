import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/main.vue';

Vue.use(VueRouter);

const Add = () => import(/* webpackChunkName: "add" */ '@/views/add.vue');
const AddTable = () => import(/* webpackChunkName: "add" */ '@/components/table/table.vue');

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Main
		},
		{
			path: '/add',
			component: Add,
			children: [
				{
					path: 'table',
					component: AddTable
				}
			]
		}
	]
})