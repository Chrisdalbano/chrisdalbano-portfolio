<template>
  <!-- <div class="bg-[#3A3F58] min-h-screen"> -->
  <div>
    <div id="floating-item-1"></div>
    <div id="floating-item-2"></div>
    <div id="floating-item-3"></div>
    <section class="p-4 md:p-20 lg:p-32">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold pt-32" ref="title">
        CHRISTIAN D'ALBANO
      </h1>
      <h2 class="text-xl md:text-2xl mt-2" ref="subtitle">
        is a Developer based in Orlando, FL
      </h2>

      <p class="mt-8 text-lg max-w-4xl">
        From creative ideas to responsive and useful web applications, my love
        for development is deeply influenced by my passion to turn ideas into
        functional matter. I enjoy breaking down problems to bring life
        impactful, user-based websites pixel by pixel. Let’s use this momentum.
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
    <section class="flex m-4 custom-border rounded max-w-xs mt-48">
      <div class="bg-gray-900 opacity-80 p-4 icon-container">
        <a
          href="https://www.linkedin.com/in/chrisdalb/"
          target="_blank"
          class="icon-link"
        >
          <img
            class="icon"
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="Linkedin"
          />
        </a>
        <a
          href="https://github.com/chrisdalbano/"
          target="_blank"
          class="icon-link"
        >
          <img
            class="icon"
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
          />
        </a>
        <a
          href="https://twitter.com/chrisdalbano/"
          target="_blank"
          class="icon-link"
        >
          <img
            class="icon"
            src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            alt="Twitter"
          />
        </a>
      </div>
      <div class="p-4">
        <p class="text-semibold">Me. In the network.</p>
      </div>
    </section>
    <section
      class="bg-gray-900 opacity-80 mt-12 py-6 px-4"
      ref="craftingSection"
    >
      <h2 class="text-center text-3xl font-bold mb-8 text-white-cream">
        Crafting Web Wonders with
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 mx-auto w-full md:max-w-4xl"
        ref="skillsGrid"
      >
        <div
          class="skills-section bg-yellow-tiger p-4 rounded shadow-md font-semibold"
        >
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Front-End</h3>
          <p class="text-base text-gray-900">HTML5</p>
          <p class="text-base text-gray-900">JavaScript</p>
          <p class="text-base text-gray-900">TypeScript</p>
          <p class="text-base text-gray-900">Vue.js</p>
          <p class="text-base text-gray-900">Tailwind</p>
          <p class="text-base text-gray-900">CSS/SASS</p>
        </div>
        <div
          class="skills-section bg-red-brick p-4 rounded shadow-md font-semibold"
        >
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Back-End</h3>
          <p class="text-base text-gray-900">Node.js</p>
          <p class="text-base text-gray-900">MySQL</p>
          <p class="text-base text-gray-900">Express</p>
          <p class="text-base text-gray-900">Firebase</p>
          <p class="text-base text-gray-900">Azure</p>
          <p class="text-base text-gray-900">Flask</p>
        </div>
        <div
          class="skills-section bg-gray-500 p-4 rounded shadow-md font-semibold"
        >
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Building Tools</h3>
          <p class="text-base text-gray-900">Git/Github</p>
          <p class="text-base text-gray-900">Photoshop</p>
          <p class="text-base text-gray-900">Figma</p>
          <p class="text-base text-gray-900">VSCode</p>
          <p class="text-base text-gray-900">AI</p>
        </div>
      </div>
    </section>
    <section class="pl-4 md:pl-20 lg:ml-4 lg:mt-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
        CHOOSE A WEB PROJECT
      </h1>
      <h2 class="text-xl md:text-2xl mt-2 mb-8">
        These are only a few of my recent websites.
      </h2>
    </section>

    <div id="iframeModal">
      <span class="close" @click="closeIframeModal">&times;</span>
      <iframe src="" frameborder="0"></iframe>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-900 px-2 sm:px-4 md:px-6 lg:px-8 lg:text-2xl pb-8"
    >
      <div
        class="project-card rounded-lg overflow-hidden cursor-pointer"
        @mouseenter="scaleProjectUp"
        @mouseleave="scaleProjectDown"
        @click="openProject('https://quizmegpt-fb.firebaseapp.com')"
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
          <p class="text-center text-gray-800 font-bold">QuizMeGPT</p>
          <p class="text-center text-base mt-2">
            An AI based Quiz Generator Web Application, using OpenAI's API
            ChatGPT, Firebase and lots of regex to generate interesting quizzes
            based on user prompt.
          </p>
        </div>
      </div>

      <div
        class="project-card rounded-lg overflow-hidden cursor-pointer"
        @mouseenter="scaleProjectUp"
        @mouseleave="scaleProjectDown"
        @click="openProject('https://moonlight-coffee-tp.firebaseapp.com')"
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
          <p class="text-center text-gray-800 font-bold">Moonlight Coffee</p>
          <p class="text-center text-base mt-2">
            A beautiful responsive specialty coffee shop website with some cool
            animations and interesting items.
          </p>
        </div>
      </div>

      <div
        class="project-card rounded-lg overflow-hidden cursor-pointer"
        @mouseenter="scaleProjectUp"
        @mouseleave="scaleProjectDown"
        @click="
          openProject(
            'https://brave-island-0fb49420f.2.azurestaticapps.net/index.html'
          )
        "
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
          <p class="text-center text-gray-800 font-bold">Costume Chronicles</p>
          <p class="text-center text-base mt-2">
            An electronic store website dedicated to sell costumes, with cart
            features and sorting searches. Deployed in Azure.
          </p>
        </div>
      </div>
      <div
        class="project-card rounded-lg overflow-hidden cursor-pointer"
        @mouseenter="scaleProjectUp"
        @mouseleave="scaleProjectDown"
        @click="openProject('https://mtgen-host.web.app/#/')"
        ref="project0"
      >
        <div
          class="bg-cover h-64"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/magicthegenpic.jpg') + ')',
          }"
        ></div>
        <div
          class="h-48 bg-white-cream flex items-center justify-center flex-col p-4"
        >
          <p class="text-center text-gray-800 font-bold">MTGen</p>
          <p class="text-center text-base mt-2">
            An AI powered Web Application by ChatGPT and DALL-E APIs in Flask to
            generate custom Magic The Gathering cards based on prompts. Deployed
            on Azure.
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <router-link
        to="/works"
        class="button-view rounded bg-red-brick text-white text-xl font-bold"
      >
        VIEW MORE
      </router-link>
    </div>
    <div
      class="p-4 md:pl-20 lg:ml-4 fixed bottom-4 left-4 md:static md:ml-auto md:mr-0"
    >
      <div
        id="back-to-top"
        @click="backToTop"
        class="shadow-black shadow-md bg-red-brick rounded w-12 h-12 flex items-center justify-center cursor-pointer transition-opacity duration-300 opacity-0 lg:opacity-100"
      >
        <span class="text-white text-2xl">&#x2191;</span>
      </div>
    </div>

    <footer class="p-8">
      <p class="flex justify-center text-blue-300">
        Made by Christian D'Albano, fueled by Espresso shots.
      </p>
    </footer>
  </div>
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
      mouseX: 0,
      mouseY: 0,
    };
  },

  mounted() {
    // After the component is mounted, check the scroll position
    window.addEventListener("scroll", this.checkScroll);
    window.addEventListener("scroll", this.checkScroll);
    window.addEventListener("mousemove", this.handleMouseMove);

    //parallax attempt
    this.$nextTick(() => {
      // your animation code here
      const projectElements = [
        this.$refs.project0,
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
    });
  },
  beforeUnmount() {
    // Remove listener when the component is destroyed
    window.removeEventListener("scroll", this.checkScroll);
    window.removeEventListener("mousemove", this.handleMouseMove);

    ScrollTrigger.getAll().forEach((ST) => ST.kill());
  },
  methods: {
    openIframeModal(url) {
      var modal = document.getElementById("iframeModal");
      var iframe = modal.querySelector("iframe");
      iframe.src = url;
      modal.style.display = "block";
      document.body.classList.add("no-scroll"); // Add the no-scroll class
    },
    closeIframeModal() {
      var modal = document.getElementById("iframeModal");
      modal.style.display = "none";
      var iframe = modal.querySelector("iframe");
      iframe.src = ""; // clear the iframe's src to stop loading the page
      document.body.classList.remove("no-scroll"); // Remove the no-scroll class
    },
    openProject(url) {
      this.openIframeModal(url);
    },
    viewMore() {
      // Navigate to the ResumeView page
      this.$router.push("/resume").then(() => {
        // Wait until next render cycle to scroll
        this.$nextTick(() => {
          // Scroll to the projects section
          const resumeViewComponent = this.$parent.$children.find(
            (component) => component.$options.name === "ResumeView"
          );
          const projectsSectionElement =
            resumeViewComponent.$refs.projectsSection;
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: projectsSectionElement.offsetTop, autoKill: false },
            ease: "power2.out",
          });
        });
      });
    },
    handleMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      gsap.to("#floating-item-1", {
        x: (this.mouseX - window.innerWidth / 2) * 0.01,
        y: (this.mouseY - window.innerHeight / 2) * 0.01,
      });

      gsap.to("#floating-item-2", {
        x: (this.mouseX - window.innerWidth / 2) * 0.02,
        y: (this.mouseY - window.innerHeight / 2) * 0.02,
      });

      gsap.to("#floating-item-3", {
        x: (this.mouseX - window.innerWidth / 2) * 0.03,
        y: (this.mouseY - window.innerHeight / 2) * 0.03,
      });
    },
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

    scaleProjectUp(event) {
      gsap.to(event.currentTarget, {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.out",
      });
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
<style>
.icon-container {
  display: flex;
  justify-content: space-around;
}

.icon-link {
  transition: border 0.3s ease-in-out;
  border: 2px solid transparent;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.icon-link:hover {
  border: 2px solid #fff;
}

.icon {
  filter: grayscale(100%);
}

#floating-item-1 {
  background-image: url("@/assets/props/sun.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 35%;
  height: 35%;
  position: absolute;
  top: 20%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: -2;
  opacity: 1;
}

#floating-item-2 {
  background-image: url("@/assets/props/cloud1.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 30%;
  height: 30%;
  position: absolute;
  top: 70%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

#floating-item-3 {
  background-image: url("@/assets/props/cloud2.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 15%;
  height: 15%;
  position: absolute;
  top: 70%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

body {
  background-color: #3a3f58;
}

.button-view {
  display: inline-block;
  padding: 10px 20px;

  text-align: center;

  transition: all 0.3s ease;
}

.button-view:hover {
  background-color: #52160b;
}

@media (max-width: 386px) {
  #floating-item-2,
  #floating-item-3 {
    opacity: 0.1;
  }
}

.custom-border {
  border: 2px solid transparent; /* Default transparent border */
  transition: all 0.5s ease;
}

.custom-border:hover {
  transition: all 0.5s ease;
  border-color: whitesmoke; /* Change border color on hover */
}

.project-card {
  border: 4px solid transparent;
}

.project-card:hover {
  transition: border 0.3s ease-in-out;
  border: 4px solid white;
}

#iframeModal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  max-height: 100vh;
}

#iframeModal iframe {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border: 4px solid #f9ac67;
  border-radius: 4px;
}

.close {
  position: absolute;
  top: 5%;
  right: 5%;
  background: #ed6b5b;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.close:hover {
  transition: all 0.3s ease;
  background: #924b41;
}

.no-scroll {
  overflow: hidden;
  height: 100%;
}
</style>
