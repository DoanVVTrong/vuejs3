

import { createRouter, createWebHistory } from "vue-router";//lấy từ module node
import admin from "./admin.js"; // lấy từ admin.js trong router

const routes = [...admin]; // lấy data của admin trong file admin.js trong router

const router = createRouter({
    history : createWebHistory(),//Xử dụng trình duyệt web với chế độ history
    routes
})

export default router; // xuất ra

