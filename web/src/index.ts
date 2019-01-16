import Vue from 'vue';
import App from './app.vue';
import router from './route';
import ElementUI from 'element-ui';

import '@/style/reset';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

export default new Vue({
	el: '#app',
	router,
	render: h => h(App)
})