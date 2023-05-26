<template>
  <section class="p-4 md:p-20 lg:p-32">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold pt-32">
      CHRISTIAN D'ALBANO
    </h1>
    <h2 class="text-xl md:text-2xl mt-2">
      is a Web Developer based in Orlando, FL
    </h2>

    <p class="mt-8 text-lg max-w-4xl">
      From creative ideas to responsive and useful web applications, my love for
      development is deeply influenced by my passion to turn ideas into
      functional matter. I enjoy breaking down problems to bring life impactful,
      user-based websites pixel by pixel, request by you got it. Let’s use this
      momentum.
    </p>

    <button
      class="bg-red-brick rounded p-2 pl-4 pr-4 mt-4 hover:bg-red-800 font-bold"
      @click="goToBottom"
      @mouseenter="scaleButtonUp"
      @mouseleave="scaleButtonDown"
      ref="showMeButton"
    >
      SHOW ME
    </button>
  </section>
  <section class="bg-gray-900 opacity-80 mt-56 py-6 px-4" ref="craftingSection">
    <h2 class="text-center text-3xl font-bold mb-8 text-white-cream">
      Crafting Web Wonders with
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mx-auto w-full md:max-w-4xl"
      ref="skillsGrid"
    >
      <div
        class="skills-section bg-yellow-tiger p-4 rounded shadow-md font-semibold"
      >
        <h3 class="text-2xl font-bold mb-4 text-gray-900">Front-End</h3>
        <p class="text-base text-gray-900">JavaScript</p>
        <p class="text-base text-gray-900">TypeScript</p>
        <p class="text-base text-gray-900">Vue.js</p>
        <p class="text-base text-gray-900">Tailwind</p>
        <p class="text-base text-gray-900">Sass</p>
      </div>
      <div
        class="skills-section bg-yellow-tiger p-4 rounded shadow-md font-semibold"
      >
        <h3 class="text-2xl font-bold mb-4 text-gray-900">Back-End</h3>
        <p class="text-base text-gray-900">Node.js</p>
        <p class="text-base text-gray-900">MySQL</p>
        <p class="text-base text-gray-900">Express</p>
        <p class="text-base text-gray-900">Firebase</p>
      </div>
    </div>
  </section>
  <section class="pl-4 md:pl-20 lg:ml-4 lg:mt-4">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
      CHOOSE A WEB PROJECT
    </h1>
    <h2 class="text-xl md:text-2xl mt-2">
      These are only a few of my recent websites.
    </h2>
  </section>
  <div class="flex text-black p-2 lg:text-2xl pb-8">
    <div
      class="w-full sm:w-1/2 lg:w-1/4 mx-4 rounded-lg overflow-hidden"
      @mouseenter="scaleProjectUp"
      @mouseleave="scaleProjectDown"
      ref="project1"
    >
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
          An AI based quiz generator web application, using OpenAI's API
          chat-gpt-turbo.
        </p>
      </div>
    </div>

    <div
      class="w-full sm:w-1/2 lg:w-1/4 mx-4 rounded-lg overflow-hidden"
      @mouseenter="scaleProjectUp"
      @mouseleave="scaleProjectDown"
      ref="project2"
    >
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
          A beautiful responsive specialty coffee shop website with some cool
          animations and interesting items.
        </p>
      </div>
    </div>

    <div
      class="w-full sm:w-1/2 lg:w-1/4 mx-4 rounded-lg overflow-hidden"
      @mouseenter="scaleProjectUp"
      @mouseleave="scaleProjectDown"
      ref="project3"
    >
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
          An electronic store website dedicated to sell costumes, with cart
          features and sorting searches.
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
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "HomeView",
  data() {
    return {
      bottomScrollTriggered: false,
    };
  },
  mounted() {
    // After the component is mounted, check the scroll position
    window.addEventListener("scroll", this.checkScroll);
    window.addEventListener("scroll", this.checkScroll);

    const projectElements = [
      this.$refs.project1,
      this.$refs.project2,
      this.$refs.project3,
    ];

    projectElements.forEach((element) => {
      gsap.from(element, {
        autoAlpha: 0, // start with opacity 0
        scale: 0, // start from zero size
        duration: 1.3,
        ease: "elastic.out", // you can use 'back.out' for a blooming effect
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.from(this.$refs.skillsGrid, {
      autoAlpha: 0,
      y: 100,
      duration: 0.7,
      ease: "power1.out",
      scrollTrigger: {
        trigger: this.$refs.skillsGrid,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  },
  beforeUnmount() {
    // Remove listener when the component is destroyed
    window.removeEventListener("scroll", this.checkScroll);

    ScrollTrigger.getAll().forEach((ST) => ST.kill());
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
        scale: 1.1,
        duration: 0.2,
        ease: "power1.out",
      });
    },
    scaleButtonDown() {
      gsap.to(this.$refs.showMeButton, {
        scale: 1,
        duration: 0.1,
        ease: "power1.out",
      });
    },
    backToTop() {
      gsap.to(window, { duration: 0.5, scrollTo: { y: 0 } });
    },
    goToBottom() {
      console.log("goToBottom called");
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const sectionOffsetTop =
        this.$refs.craftingSection.offsetTop - navbarHeight;
      console.log("sectionOffsetTop:", sectionOffsetTop);
      gsap.to(window, {
        duration: 2.3,
        scrollTo: { y: sectionOffsetTop, autoKill: false },
        ease: "power2.inOut",
      });
    },
    goToVeryBottom() {
      if (this.bottomScrollTriggered) {
        // If the function has already been called, do nothing and return.
        return;
      }
      console.log("goToBottom called");
      const sectionOffsetTop = document.body.scrollHeight; // This will scroll to the bottom of the page
      console.log("sectionOffsetTop:", sectionOffsetTop);
      gsap.to(window, {
        delay: 5,
        duration: 2.3,
        scrollTo: { y: sectionOffsetTop, autoKill: false },
        ease: "power2.inOut",
      });
      this.bottomScrollTriggered = true;
    },
    scaleProjectUp(event) {
      gsap.to(event.currentTarget, {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.out",
      });

      this.goToVeryBottom();
    },
    scaleProjectDown(event) {
      gsap.to(event.currentTarget, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    },
  },
};
</script>
<style></style>
