import { createRouter, createWebHistory } from "vue-router"; // Change this from createWebHashHistory to createWebHistory
import HomeView from "@/views/HomeView.vue";
import WorksView from "@/views/WorksView.vue";
import ResumeView from "@/views/ResumeView.vue";
import QMGPTViewVue from "@/views/QMGPTView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/works",
    name: "works",
    component: WorksView,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
  },
  {
    path: "/quizmegpt",
    name: "quizmegpt",
    component: QMGPTViewVue,
  }
];

const router = createRouter({
  history: createWebHistory(), // This changed from createWebHashHistory
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
});

router.afterEach((to) => {
  if (typeof window._mfq !== "undefined") {
    window._mfq.push(["newPageView", to.fullPath]);
  }
});

export default router;