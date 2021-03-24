import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Utils from './assets/js/utils'
Vue.config.productionTip = false
// 配置全局自定义设置
import settings from '@/assets/js/settings'
Vue.prototype.$settings = settings;
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.Utils = Utils
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

//路由钩子
router.beforeEach((to,from,next)=>{

	//判断是否已经登录
	//localStorage.setItem('isLogined',true)
	//localStorage.removeItem('isLogined')
	var isLogined = Boolean(sessionStorage.getItem('username'));
	//to.matched一个数组，包含当前路由的所有嵌套路径片段的路由记录 。
	//路由记录就是 routes 配置数组中的对象副本（还有在 children 数组），这里就是record
	//es6 some方法
	if(to.matched.some(record=>record.meta.requireAuth)){
		if(!isLogined){
			next({
				path:'/login',
				query:{redirect:to.fullpath}
			})
		}else
			next()
	}else
		next()
})