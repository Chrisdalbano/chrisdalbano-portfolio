<template>
  <nav class="flex items-center justify-between p-4 md:p-6 bg-transparent pl-4 md:pl-20">
    <div class="space-x-4 md:space-x-6 pt-2">
      <router-link to="/" class="text-lg md:text-xl hover:text-gray-300">
        Home
      </router-link>
      <router-link to="/resume" class="text-lg md:text-xl hover:text-gray-300">
        Resume
      </router-link>
      <router-link to="/works" class="text-lg md:text-xl hover:text-gray-300">
        Works
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
