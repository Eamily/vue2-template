import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import formCreate from "@form-create/element-ui";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.use(formCreate);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
