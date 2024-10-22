import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Pinia Config
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const vuetify = createVuetify({
  components,
  directives,
});

// Emitter (mitt) Config
import mitt from "mitt";
const Emitter = mitt();

// Fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
createApp(App)
  .use(createPinia())
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(router)
  .mount("#app");
