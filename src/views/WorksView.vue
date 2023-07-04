<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <section class="mt-14">
    <h1
      class="flex justify-center text-center text-2xl md:text-3xl lg:text-4xl font-bold pt-32"
    >
      CHRISTIAN D'ALBANO
    </h1>
    <h2
      class="flex justify-center text-center text-4xl md:text-5xl lg:text-6xl font-bold"
    >
      WORKS
    </h2>
    <p
      class="flex justify-center text-center text-xs mt-2 transform -rotate-6 opacity-60"
    >
      (yes, I work)
    </p>
    <div class="sm:inline-block lg:flex mt-8 mb-4 justify-center space-x-4">
      <div class="ml-6 lg:ml-2 mb-4">
        <img
          :src="require('@/assets/birdmoment.jpg')"
          alt="Bird Moment"
          class="w-96 h-auto"
        />
        <p class="text-sm text-center opacity-80">Photo by me in the Lakefront Beach, St. Cloud, FL</p>
      </div>
      <div class="text-xl">
        <h2 class="text-center flex justify-center font-serif">
          'Like a bird on the post'
        </h2>
        <p class="flex justify-center max-w-sm">
          Ready to soar into new realms of discovery and innovation, I am a
          driven and curious developer with an interesting portfolio of projects. My
          passion lies in finding unique solutions to complex problems, and
          creating fantastic user experiences, whether it's a dynamic web
          application or a high-performance software system.
        </p>
      </div>
    </div>
    
    <div
      id="projects"
      class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 pt-4"
    >
      <div
        class="rounded overflow-hidden shadow-lg p-6 bg-white-cream text-gray-800 w-full md:w-auto"
      >
        <h3 class="font-bold text-2xl">QuizMEGPT</h3>
        <h3 class="font-bold text-base mb-2 text-gray-700">Web Application</h3>
        <p class="text-base mb-4">
          QuizMEGPT is An AI-based web application using the GPT-Turbo API to
          generate personalized quizzes for users based on their prompt. The web
          application also allows the user to register to review their past
          quizzes and get points to level up for motivation. Built using Vue.js,
          ChatGPT API, CSS3, some webpacks, backend and hosting in Firebase.
        </p>
        <h3 class="font-bold text-base mb-2 text-gray-700">Tech used:</h3>
        <div class="flex flex-wrap">
          <div class="tech-item">JavaScript</div>
          <div class="tech-item">Vue.js</div>
          <div class="tech-item">Webpack</div>
          <div class="tech-item">gpt-turbo</div>
          <div class="tech-item">CSS3</div>
          <div class="tech-item">Vuex</div>
          <div class="tech-item">Firebase</div>
          <div class="tech-item">GPT-Turbo</div>
        </div>
        <button
          class="mt-4 bg-red-brick hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="https://quizmegpt-fb.firebaseapp.com" target="_blank"
            >Live Project</a
          >
        </button>
        <button
          class="mt-4 ml-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="https://github.com/Chrisdalbano/quizmegpt" target="_blank"
            >GitHub Repo</a
          >
        </button>
      </div>

      <div
        class="rounded overflow-hidden shadow-lg p-6 bg-white-cream text-gray-800 w-full md:w-auto"
      >
        <h3 class="font-bold text-2xl">Moonlight Coffe</h3>
        <h3 class="font-bold text-base mb-2 text-gray-700">Landing website</h3>
        <p class="text-base mb-4">
          A landing website for a non-real local coffee shop based in Orlando,
          FL. It contains classic restaurant elements in a 'Singe Page
          Application' using Vue Router to archive this. Was built using
          TailwindCSS for styling, Vue.js for front-end, transitions, routes and
          deployed in Firebase.
        </p>
        <h3 class="font-bold text-base mb-2 text-gray-700">Tech used:</h3>
        <div class="flex flex-wrap">
          <div class="tech-item">JavaScript</div>
          <div class="tech-item">Vue.js</div>
          <div class="tech-item">TailwindCSS</div>
          <div class="tech-item">Firebase</div>
          <div class="tech-item">Anime.js</div>
        </div>
        <button
          class="mt-4 bg-red-brick hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="https://moonlight-coffee-tp.firebaseapp.com" target="_blank"
            >Live Project</a
          >
        </button>
        <button
          class="mt-4 ml-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          <a
            href="https://github.com/Chrisdalbano/moonlight-coffee-web"
            target="_blank"
            >GitHub Repo</a
          >
        </button>
      </div>

      <div
        class="rounded overflow-hidden shadow-lg p-6 bg-white-cream text-gray-800 w-full md:w-auto"
      >
        <h3 class="font-bold text-2xl">MTGen (Magic The Generator)</h3>
        <h3 class="font-bold text-base mb-2 text-gray-700">Web Application</h3>
        <p class="text-base mb-4">
          Web-based Magic: The Gathering (MTG) card generator that leverages AI
          technology to create new and unique MTG cards. Users input a theme or
          a prompt, and the application generates a complete card that fits the
          given theme. The result includes the card's name, cost, type, power,
          toughness, abilities, and art. The Flask API its being maintained in
          an Azure Cloud Web Server
          <b class="text-red-700 opacity-60">Requires an OpenAI API Token</b>.
        </p>
        <h3 class="font-bold text-base mb-2 text-gray-700">Tech used:</h3>
        <div class="flex flex-wrap">
          <div class="tech-item">JavaScript</div>
          <div class="tech-item">Vue.js</div>
          <div class="tech-item">TailwindCSS</div>
          <div class="tech-item">Firebase</div>
          <div class="tech-item">Flask</div>
          <div class="tech-item">DALL-E</div>
          <div class="tech-item">GPT-Turbo</div>
          <div class="tech-item">Azure</div>
        </div>
        <button
          class="mt-4 bg-red-brick hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="https://mtgen-host.web.app/#/" target="_blank"
            >Live Project</a
          >
        </button>
        <button
          class="mt-4 ml-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="https://github.com/Chrisdalbano/mtgen-ai" target="_blank"
            >GitHub Repo</a
          >
        </button>
      </div>

      <div
        class="rounded overflow-hidden shadow-lg p-6 bg-white-cream text-gray-800 w-full md:w-auto"
      >
        <h3 class="font-bold text-2xl">Costume Chronicles</h3>
        <h3 class="font-bold text-base mb-2 text-gray-700">E-Commerce</h3>
        <p class="text-base mb-4">
          An ecommerce Full-stack website that uses Vanilla HTML, CSS, and
          JavaScript for the front-end. The deployment was done in Azure Static
          Web Services along with the MySQL Flexible Server. The website
          showcases an E-Commerce full website with item search and shopping
          functionality, pulled from the Database.
        </p>
        <div class="flex flex-wrap">
          <div class="tech-item">JavaScript</div>
          <div class="tech-item">HTML5</div>
          <div class="tech-item">CSS3</div>
          <div class="tech-item">JavaScript</div>
          <div class="tech-item">MySQL</div>
          <div class="tech-item">Azure</div>
        </div>

        <button
          class="mt-4 bg-red-brick hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <a
            href="https://brave-island-0fb49420f.2.azurestaticapps.net"
            target="_blank"
            >Live Project</a
          >
        </button>
        <button
          class="mt-4 ml-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          <a href="https://quizmegpt-fb.firebaseapp.com" target="_blank"
            >GitHub Repo</a
          >
        </button>
      </div>

      <div
        class="rounded overflow-hidden shadow-lg p-6 bg-white-cream text-gray-800 w-full md:w-auto"
      >
        <h3 class="font-bold text-2xl">Simply Python RPG</h3>
        <h3 class="font-bold text-base mb-2 text-gray-700">
          Python Application
        </h3>
        <p class="text-base mb-4">
          This is a fully customizable turn-based RPG encounter between the
          player (yourself) and a personalized amount of enemies. This Python
          script OOP based uses libraries and customizable classes to build a
          turn-based combat with a simple behavioral AI built from scratch.
        </p>
        <div class="flex flex-wrap">
          <div class="tech-item">Python</div>
          <div class="tech-item">Bash</div>
          <div class="tech-item">OOP</div>
          <div class="tech-item">Algorithms</div>
        </div>

        <button
          class="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          <a
            href="https://github.com/Chrisdalbano/python-turn-battle"
            target="_blank"
            >GitHub Repo</a
          >
        </button>
      </div>
    </div>
    <div class="flex justify-center">
      <router-link
        to="/resume"
        class="button-view rounded-md bg-red-brick text-white text-xl font-bold"
      >
        VIEW RESUME
      </router-link>
    </div>
  </section>
  <footer class="p-8">
    <p class="flex justify-center text-blue-300">
      Made by Christian D'Albano, fueled by Espresso shots.
    </p>
  </footer>
</template>
<script>
import { gsap } from "gsap";

export default {
  mounted() {
    this.animateCards();
  },
  methods: {
    animateCards() {
      const cards = document.querySelectorAll(".overflow-hidden");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { x: "-50%", opacity: 0.2 },
          { x: "0%", opacity: 1, duration: 0.2, delay: index * 0.02 }
        );
      });
    },
  },
};
</script>
<style scoped>
.tech-item {
  background-color: #ffffff; /* bg-gray-100 */
  color: #374151; /* text-gray-700 */
  padding: 4px 8px; /* py-1 px-2 */
  margin-right: 4px; /* mr-1 */
  margin-bottom: 4px; /* mb-1 */
  border-radius: 8px; /* rounded-md */
  font-size: 0.875rem; /* text-sm */
}

.rounded {
  transition: transform 0.5s;
  margin: 2em;
  max-width: 90%;
}

.rounded:hover {
  transform: scale(1.02);
}
</style>
