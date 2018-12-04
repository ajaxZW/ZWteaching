// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'   //旧版本中，也许是theme-default，请自行检查填写
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next) => { 
	const token = true; 
	const nextRoute=['/table','/editor','/upload'];

	if(!token &&( nextRoute.indexOf(to.path)>=0) ){//未登录，强制登录
		next({ name:"main" // 将跳转的路由path作为参数，登录成功后跳转到该路由 
		});
	}else{
		next(); 
	} 
});

