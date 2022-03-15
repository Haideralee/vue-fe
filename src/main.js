import { createApp } from "vue";
import App from "./App.vue";
import router from "./Routes";

const APP = createApp(App);

APP.use(router);

APP.mount("#app");
