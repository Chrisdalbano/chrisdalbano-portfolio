<template>
  <section class="mt-14">
    <h1
      class="flex justify-center text-4xl md:text-5xl lg:text-4xl font-bold pt-32"
    >
      RESUME
    </h1>
    <h2 class="flex justify-center text-4xl md:text-5xl lg:text-6xl font-bold">
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

    <div class="flex justify-center p-4 text-xl">
      <div class="w-full lg:w-1/2">
        <div
          class="bg-blue-mistery shadow-black shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4"
          ref="resumeSection"
        >
          <div class="mb-4">
            <h2 class="flex justify-center text-2xl font-bold mb-4">Insight</h2>
            <p class="m">
              Experienced web developer, with a focus on front-end development,
              notably in Vue.js and React environments. Proven ability to build
              and optimize responsive web applications for the efficient and
              effective presentation of business content. Looking to bring my
              expertise in software development to a dynamic team.
            </p>
            <p>
              Demonstrated ability to develop, troubleshoot issues, manage user
              accounts, and understand client necessities to implement advanced
              and appropiate tech solutions. Proven success in enhancing the
              user experience through efficient, accurate, and accessible web
              applications for diverse audiences.
            </p>
          </div>
          <div class="mb-4 border rounded p-2">
            <h2 class="text-2xl font-bold mb-4 flex justify-center">Contact</h2>
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
              <div class="p-4 bg-red-brick font-semibold rounded">
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
              • Mastered JavaScript Frameworks such as Vue.js and React,
              creating scalable, maintainable, and efficient websites.
              Demonstrated proficiency with numerous libraries and expertise in
              API manipulation for third-party integrations.
            </p>
            <p>
              • Proficient in C#, Java, JavaScript, and Python programming
              languages, underscoring versatility and technical acumen.
            </p>
            <p>
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
                API to generate quizzes for users. The website takes and input
                from the users to send a request to the gpt-turbo model and once
                this one generates the prompt, the application will extract with
                regex algorithms to build a fun customizable quiz. Utilized
                Vue.js for front-end, and Firebase / Node.js for backend and
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
                Landing website for a non-real local coffee shop based in
                Orlando, FL. Demonstrates the uses of transitions, media,
                responsiveness and proper UI/UX to showcase the abilities to
                build an entire website for a company. In this case, a Coffee
                Shop. Build with Vue.js, Tailwind, Animate.js and deployed in
                Firebase for hosting and escalability.
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
              <p class="mb-8">
                Hosted, managed and deployed in Azure. Costume Chronicles is a
                non-real ecommerce Full-stack website that uses Vanilla HTML,
                CSS and JavaScript for the front-end to showcase a full
                ecommerce website where the items are pulled from the backend
                and the users can search, filter and buy their items. The
                backend is done in Azure where a MySQL Flexible Server is being
                hosted.
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
              <p>
                • Streamlined COVID-19 vaccination event processes by automating
                system administration tasks using Python scripts, enhancing
                communication between EHR systems and healthcare staff.
              </p>
              <p>
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
              <p>
                • Applied front and backend knowledge using the JavaScript
                framework Vue.js to build and implement the designs and
                functionality of the web application DoughRise, showcasing
                adaptability and versatility relevant to IT practices.
              </p>
              <p>
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
              <p>
                • Provided robust technical support for the patient portal web
                application, initially built with Okta and later transitioned
                into a Flutter web application, for end-users, internal staff,
                and development teams.
              </p>
              <p>
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
  <div class="flex justify-center pt-4 pb-4">
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
        start: "top bottom-=300",
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
