import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 加载 Vant组件
import Vant from "vant"
// 加载使用vant全局样式
import "vant/lib/index.css"

// 全局样式
import "./styles/index.less"

// 组测vant组件库
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
