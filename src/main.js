import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'

import Antd from 'ant-design-vue';
import 'antd/dist/reset.css';

// const app = createApp();

// app.config.productionTip = false;


createApp(App).use(Antd).use(store).use(router).mount('#app')
