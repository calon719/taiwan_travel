// css start
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '@/assets/stylesheet/all.scss';
// css end

// plugin start
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
// plugin end

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);

app.mount('#app');
