import {createApp} from 'vue'; // import từ module node
import { Drawer ,Button, message } from 'ant-design-vue';
import './style.css'
import App from './App.vue';//import app từ app.vue
import router from './router/index.js';
// import routes from './router/index'
import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'


const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Drawer);
app.mount("#app")//dùng để quản lý app
app.config.globalProperties.$message = message;

