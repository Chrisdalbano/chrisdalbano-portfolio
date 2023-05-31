<template>
  <section class="mt-14">
    <h1
      class="flex justify-center text-center text-4xl md:text-5xl lg:text-4xl font-bold pt-32"
    >
      RESUME
    </h1>
    <h2
      class="flex justify-center text-center text-4xl md:text-5xl lg:text-6xl font-bold"
    >
      CHRISTIAN D'ALBANO
    </h2>
    <p class="flex justify-center mt-4 font-serif text-center">
      "I firmly believe that the key to developing outstanding technologies lies
      in our ability to empathize with our client needs."
    </p>
    <div class="flex justify-center pt-4 pb-4">
      <a
        :href="pdfFile"
        target="_blank"
        class="bg-red-brick rounded p-2 pl-4 pr-4 mt-4 hover:bg-red-800 font-bold"
        ref="downloadButton"
        @mouseenter="scaleButtonUp"
        @mouseleave="scaleButtonDown"
      >
        DOWNLOAD
      </a>
    </div>

    <div class="flex justify-center p-4 md:text-xl sm:text-base">
      <div class="w-full lg:w-2/3">
        <div
          class="bg-blue-mistery shadow-black shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4"
          ref="resumeSection"
        >
          <div class="mb-4">
            <h2 class="flex justify-center text-2xl font-bold mb-4">Insight</h2>
            <p class="m">
              I am a developer with a focus on front-end development, notably in
              Vue.js and other JS environments. I have proven ability to build
              and optimize responsive web applications for the efficient and
              effective presentation of business content. Also posses skills in
              Backend technologies such as Node.js, Django and Firebase.
            </p>
            <p class="mt-2">
              Currently, I am looking to bring my experience in software and/or
              web development to a dynamic team.
            </p>
          </div>
          <div class="mb-4 border rounded p-2">
            <h2 class="font-bold mb-4 flex justify-center">Contact</h2>
            <section class="flex flex-col sm:flex-row m-4 rounded max-w-xs">
              <div
                class="bg-gray-900 opacity-80 p-4 icon-container text-white-cream"
              >
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
              <div
                class="p-4 bg-red-brick font-semibold rounded text-xs md:text-lg"
              >
                <a href="mailto:chrisdalbano12@gmail.com" class="text-semibold"
                  >chrisdalbano12@gmail.com</a
                >
                <p>(407)449-0746</p>
              </div>
            </section>
          </div>
          <div class="mb-4 p-4 bg-yellow-tiger rounded text-gray-900">
            <h2 class="text-2xl font-bold mb-4 flex justify-center">
              Technical Skills
            </h2>
            <p>
              • Manipulated JavaScript Frameworks such as Vue.js and React,
              creating scalable, maintainable, and efficient websites.
              Demonstrated proficiency with numerous libraries and API
              manipulation for third-party integrations.
            </p>
            <p class="mt-2">
              • Proficient in C#, Java, JavaScript, and Python programming
              languages, underscoring versatility and technical acumen.
            </p>
            <p class="mt-2">
              • Familiar with Agile software development methodologies,
              highlighting comprehension of team dynamics and exceptional
              inter-team communication skills.
            </p>
          </div>
          <div id="projects" class="mb-4">
            <p class="text-2xl font-bold mb-4 flex justify-center">Projects</p>
            <div class="pl-4">
              <div class="mb-2">
                <a
                  class="font-bold mb-2 rounded bg-white-cream text-gray-900 w-max p-2"
                  href="https://quizmegpt-fb.firebaseapp.com/"
                  target="_blank"
                >
                  QuizMeGPT
                </a>
              </div>

              <p class="mb-8">
                Artificial Intelligence based web application using the GPT-3
                API to generate quizzes for users. Utilized Vue.js for
                front-end, and Firebase / Node.js for backend and
                authentication.
              </p>
            </div>
            <div class="pl-4">
              <div class="mb-2">
                <a
                  class="font-bold mb-2 rounded bg-white-cream text-gray-900 w-max p-2"
                  href="https://moonlight-coffee-tp.firebaseapp.com/"
                  target="_blank"
                >
                  MoonLight Coffee Website
                </a>
              </div>
              <p class="mb-8">
                Landing website that demonstrates the uses of transitions,
                media, responsive design to showcase my abilities of UX for
                small business. In this case, a Coffee Shop. Build with Vue.js,
                Tailwind, Animate.js and deployed in Firebase for hosting and
                escalability.
              </p>
            </div>
            <div class="pl-4">
              <div class="mb-2">
                <a
                  class="font-bold mb-2 rounded bg-white-cream text-gray-900 w-max p-2"
                  href="https://brave-island-0fb49420f.2.azurestaticapps.net/index.html/"
                  target="_blank"
                >
                  Costume Chronicles - Online Store
                </a>
              </div>
              <p class="">
                Hosted, managed and deployed in Azure. Costume Chronicles is a
                non-real ecommerce Full-Stack website that uses Vanilla HTML,
                CSS and JavaScript for the front-end to showcase a full
                ecommerce website.
              </p>
              <p
                class="flex justify-center text-center pt-10 pb-10 font-bold text-red-brick"
              >
                You can check out more about my projects on my 'Works' tab.
              </p>
            </div>
          </div>
          <div class="mb-4">
            <h2 class="text-2xl font-bold mb-4 flex justify-center">
              Professional Experience
            </h2>
            <p class="font-bold rounded p-2 border overflow-auto">
              Web Application Support @ Baptist Health South Florida
            </p>
            <a
              href="https://pineapp.web.baptisthealth.net/"
              target="_blank"
              class="font-serif text-yellow-tiger"
              >(mybaptisthealth.net)</a
            >
            <p class="mb-2">(Jun 2022 - Present)</p>
            <div class="pl-4">
              <p class="mb-2">
                • Provided robust technical support for the patient portal web
                application, initially built with Okta and later transitioned
                into a Flutter web application, for end-users, internal staff,
                and development teams.
              </p>
              <p class="mb-2">
                • Managed and resolved an average of 20 daily tickets pertaining
                to the web application using ServiceNow, escalating complex
                development issues to senior team members when necessary, and
                providing comprehensive feedback on incidents and potential
                solutions.
              </p>
              <p class="mb-8">
                • Assisted the development team in troubleshooting and resolving
                issues with the patient portal application, utilizing JavaScript
                and Dart for bug identification and function debugging.
              </p>
            </div>

            <div class="bg-red-brick rounded"></div>
            <p class="font-bold rounded p-2 border overflow-auto">
              Full Stack Developer Intern @ DoughRise
            </p>
            <p></p>
            <a
              href="https://doughrise.co"
              target="_blank"
              class="font-serif text-yellow-tiger"
              >(doughrise.co)</a
            >
            <p class="mb-2">(Oct 2022 - Jan 2023)</p>
            <div class="pl-4">
              <p class="mb-2">
                • Applied front and backend knowledge using the JavaScript
                framework Vue.js to build and implement the designs and
                functionality of the web application DoughRise, showcasing
                adaptability and versatility relevant to IT practices.
              </p>
              <p class="mb-2">
                • Implemented continuous integration and deployment (CI/CD)
                processes using Git and DevOps practices to improve software
                delivery speed and reliability, highlighting experience in
                software installation, configuration, and troubleshooting.
              </p>
              <p class="mb-8">
                • Employed Git and GitHub as the primary version control system
                for the development of the web application DoughRise,
                collaborating with the team on a daily basis to ensure seamless
                integration of code and a clear historical record of changes,
                showcasing teamwork and experience working with diverse groups.
              </p>
            </div>

            <p class="font-bold mb-2 rounded p-2 border overflow-auto">
              IT Support Engineer @ SNI Technology
            </p>
            <p class="mb-2">(Sep 2021 - Jun 2022)</p>
            <div class="pl-4">
              <p class="mb-2">
                • Streamlined COVID-19 vaccination event processes by automating
                system administration tasks using Python scripts, enhancing
                communication between EHR systems and healthcare staff.
              </p>
              <p class="mb-2">
                • Managed Microsoft Azure cloud infrastructure, providing high
                availability for essential healthcare services and applications
                during COVID-19 vaccination events in a HIPAA-compliant setting,
                handling user management, security updates, and performance
                monitoring to support vaccination event operations.
              </p>
              <p class="mb-8">
                • Collaborated with cross-functional teams, including healthcare
                staff and volunteers, to troubleshoot and resolve technical
                issues during vaccination events, applying Regex and TCL for
                pattern analysis and problem-solving in healthcare IT scenarios.
              </p>
            </div>
          </div>

          <div class="mb-4">
            <h2 class="text-2xl font-bold mb-2">Certifications</h2>
            <p>Comptia A+ | Microsoft Azure Associate</p>
          </div>
          <div class="mb-4">
            <h2 class="text-2xl font-bold mb-2">Education</h2>
            <p>
              A.S Computer Programming and Analysis - Valencia College, 2020 -
              2023
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div
    class="p-4 md:pl-20 lg:ml-4 fixed bottom-4 left-4 md:static md:ml-auto md:mr-0"
  >
    <div
      id="back-to-top"
      @click="backToTop"
      class="shadow-black shadow-md bg-red-brick rounded w-12 h-12 flex items-center justify-center cursor-pointer transition-opacity duration-300 opacity-80"
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
import pdfFile from "@/assets/Christian_DAlbano_Resume.pdf";

export default {
  name: "ResumeView",
  data() {
    return { pdfFile };
  },
  mounted() {
    gsap.from(this.$refs.resumeSection, {
      autoAlpha: 0,
      y: 100,
      duration: 1.7,
      ease: "expo.out",
      scrollTrigger: {
        trigger: this.$refs.resumeSection,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  },
  methods: {
    backToTop() {
      gsap.to(window, { duration: 0.5, scrollTo: { y: 0 } });
    },
    scaleButtonUp() {
      gsap.to(this.$refs.downloadButton, {
        scale: 1.1,
        duration: 0.2,
        ease: "power1.out",
      });
    },
    scaleButtonDown() {
      gsap.to(this.$refs.downloadButton, {
        scale: 1,
        duration: 0.1,
        ease: "power1.out",
      });
    },
    handleClick(event) {
      event.preventDefault();
      window.open("public/cd-resume.pdf");
    },
  },
};
</script>
