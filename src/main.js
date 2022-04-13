import '@/assets/stylesheet/all.scss';

// plugin start
import axios from 'axios';
import VueAxios from 'vue-axios';
// plugin end

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
