import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/components/Global";
import axios from "axios";

Vue.config.productionTip = false;
axios.defaults.baseURL = "https://api.github.com";

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
