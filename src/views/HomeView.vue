<template>
  <section class="p-4 md:p-20 lg:p-32 mt-16">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
      CHRISTIAN D'ALBANO
    </h1>
    <h2 class="text-xl md:text-2xl mt-2">
      is a Web Developer based in Orlando, FL
    </h2>

    <p class="mt-8 text-lg max-w-4xl">
      From creative ideas to responsive and useful designs, my love for
      development is deeply influenced by my passion to turn ideas into
      functional matter. I enjoy breaking down problems to bring life impactful,
      user-based websites pixel by pixel, request by you got it. Let’s use this
      momentum.
    </p>

    <button
      class="bg-red-brick rounded p-2 pl-4 pr-4 mt-8 hover:bg-red-800 font-bold"
      @click="goToBottom"
      @mouseenter="scaleButtonUp"
      @mouseleave="scaleButtonDown"
      ref="showMeButton"
    >
      SHOW ME
    </button>
  </section>
  <section class="p-4 md:pl-20 lg:ml-4 mt-16 lg:mt-32">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mt-10">
      CHOOSE A WEB PROJECT
    </h1>
    <h2 class="text-xl md:text-2xl mt-2">Ah, and don't forget to enjoy it</h2>
  </section>
  <div class="flex text-black p-2 lg:text-2xl pb-8">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-2 rounded-lg overflow-hidden">
      <div
        class="bg-cover h-64"
        :style="{
          backgroundImage: 'url(' + require('@/assets/qmgpt2.jpg') + ')',
        }"
      ></div>
      <div
        class="h-48 bg-white-cream flex items-center justify-center flex-col p-4"
      >
        <p class="text-center font-semibold">QuizMeGPT</p>
        <p class="text-center text-base mt-2">
          A quiz application using GPT-3 to generate questions and answers.
        </p>
      </div>
    </div>

    <div class="w-full sm:w-1/2 lg:w-1/3 mx-2 rounded-lg overflow-hidden">
      <div
        class="bg-cover h-64"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/moonlightcoffee.jpg') + ')',
        }"
      ></div>
      <div
        class="h-48 bg-white-cream flex items-center justify-center flex-col p-4"
      >
        <p class="text-center font-semibold">Moonlight Coffee</p>
        <p class="text-center text-base mt-2">
          A beutiful local specialty Coffee Shop website with some cool
          animations and interesting items.
        </p>
      </div>
    </div>

    <div class="w-full sm:w-1/2 lg:w-1/3 mx-2 rounded-lg overflow-hidden">
      <div
        class="bg-cover h-64"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/costumechronicles.jpg') + ')',
        }"
      ></div>
      <div
        class="h-48 bg-white-cream flex items-center justify-center flex-col p-4"
      >
        <p class="text-center font-semibold">Costume Chronicles</p>
        <p class="text-center text-base mt-2">
          An electronic store website dedicated to sell costumes.
        </p>
      </div>
    </div>
  </div>
  <div class="p-4 md:pl-20 lg:ml-4">
    <div
      id="back-to-top"
      @click="backToTop"
      class="bottom-4 left-4 bg-red-brick rounded w-12 h-12 flex items-center justify-center cursor-pointer transition-opacity duration-300 opacity-0 lg:opacity-100"
    >
      <span class="text-white text-2xl">&#x2191;</span>
    </div>
  </div>

  <footer class="p-8">
    <p class="flex justify-center text-blue-300">
      Made by Christian D'Albano, fueled by Espresso shots.
    </p>
  </footer>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: "HomeView",
  mounted() {
    // After the component is mounted, check the scroll position
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeUnmount() {
    // Remove listener when the component is destroyed
    window.removeEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      // Only show the button when the page is scrolled down 100px or more
      if (window.pageYOffset > 100) {
        gsap.to("#back-to-top", { opacity: 1, duration: 0.3 });
      } else {
        gsap.to("#back-to-top", { opacity: 0, duration: 0.3 });
      }
    },
    scaleButtonUp() {
      gsap.to(this.$refs.showMeButton, {
        scale: 1.1, // Adjust this to your liking
        duration: 0.2, // And this
        ease: "power1.out", // And this
      });
    },
    scaleButtonDown() {
      gsap.to(this.$refs.showMeButton, {
        scale: 1, // Back to original size
        duration: 0.1, // Same duration as the scaling up for symmetry
        ease: "power1.out", // And same easing function
      });
    },
    backToTop() {
      gsap.to(window, { duration: 0.5, scrollTo: { y: 0 } });
    },
    goToBottom() {
      console.log("goToBottom called");
      console.log("scrollHeight:", document.documentElement.scrollHeight);
      gsap.to(window, {
        duration: 2.3,
        scrollTo: { y: document.documentElement.scrollHeight, autoKill: false },
        ease: "power2.inOut",
      });
    },
  },
};
</script>
<style></style>
