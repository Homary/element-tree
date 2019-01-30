import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/main.vue';

Vue.use(VueRouter);

const Add = () => import(/* webpackChunkName: "add" */ '@/views/add.vue');
const Panel = () => import(/* webpackChunkName: "panel" */ '@/views/panel.vue');

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Main
		},
		{
			path: '/add',
			component: Add
		},
		{
			path: '/panel*',
			component: Panel
		}
	]
})