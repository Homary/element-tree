import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Main from '@/views/main.vue';
import Add from '@/views/add.vue';

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: 'main',
			component: Main
		},
		{
			path: '/add',
			name: 'add',
			component: Add
		}
	]
})