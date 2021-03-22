import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import routes from "./router";

const app = createApp(App);

app.use(routes);
app.use(createPinia());
app.mount("#app");
