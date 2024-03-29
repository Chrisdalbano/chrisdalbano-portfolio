<template>
  <transition name="fade">
    <nav class="navbar bg-opacity-80" :class="{ 'bg-gray-800': isScrolled }">
      <div class="space-x-4 md:space-x-6 pl-4 pt-2 pb-2">
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          :to="route.path"
          class="text-lg md:text-xl p-2 rounded hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-300 ease-in-out"
          :class="[
            $route.path === route.path
              ? 'bg-gray-800 bg-opacity-100 opacity-100 text-blue-300'
              : '',
            'hover:text-blue-100',
          ]"
          @click="animateSelection(index)"
        >
          {{ route.name }}
        </router-link>
      </div>

      <div
        class="bg-red-brick h-12 w-12 rounded text-center text-4xl hover:bg-red-950"
      >
        <a target="_blank" href="mailto:chrisdalbano12@gmail.com"
          ><font-awesome-icon icon="envelope"
        /></a>
      </div>
    </nav>
  </transition>
</template>

<script>
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
export default {
  name: "NavBar",
  data() {
    return {
      isScrolled: false,
      routes: [
        { name: "Home", path: "/" },
        { name: "Works", path: "/works" },
        { name: "Resume", path: "/resume" },
      ],
    };
  },
  watch: {
    $route() {
      gsap.to(window, {
        duration: 0.2,
        scrollTo: { y: 0, autoKill: false },
        ease: "power2.out",
      });
    },
  },
  methods: {
    animateSelection(index) {
      gsap.to(`.navbar a:nth-child(${index + 1})`, {
        duration: 0.5,
        onComplete: () => {
          this.$nextTick(() => {
            gsap.set(".navbar a", { clearProps: "all" });
          });
        },
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.isScrolled = window.scrollY > 50;
    });
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  opacity: 0.8;
  transition: background-color 0.3s ease;
}

.navbar.bg-gray-800 {
  background-color: #2d3748;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  
  opacity: 0;
}

.bg-red-brick {
  transition: 0.2s;
  cursor: pointer;
}
</style>
