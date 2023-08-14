<template>
  <div id="app" class="text-white-cream">
    <NavBar />

    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>
<style>
body {
  margin: 0;
}
</style>
