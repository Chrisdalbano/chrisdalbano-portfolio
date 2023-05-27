import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorksView from "../views/WorksView.vue";
import ResumeView from "../views/ResumeView.vue" 


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "works",
    component: WorksView,
  },
  {
    path: "/",
    name: "resume",
    component: ResumeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
