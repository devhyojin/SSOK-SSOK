import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/MainPage.vue";
import SmartCamera from "@/views/SmartCamera.vue";
import SmartCamera2 from "@/views/SmartCamera2.vue";
import WelcomePage from "@/views/WelcomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
  },
  {
    path: "/main",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/smartcamera",
    name: "SmartCamera",
    component: SmartCamera,
  },
  {
    path: "/smartcamera2",
    name: "SmartCamera2",
    component: SmartCamera2,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
