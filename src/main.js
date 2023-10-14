import {createApp} from 'vue'; // import từ module node
import './style.css'
import App from './App.vue';//import app từ app.vue
import router from './router/index.js';
// import routes from './router/index'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'


const app = createApp(App);
app.use(router);
app.mount("#app")//dùng để quản lý app

