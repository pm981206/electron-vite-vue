import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router';
import piniaStore from './store';
import '@/styles/index.scss';
import '@/styles/normalize.css';

const app = createApp(App)

app.use(Antd);
app.use(router);
app.use(piniaStore);
app.mount('#app')
  .$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
