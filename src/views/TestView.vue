<template>
<section>
    <h2>
        This is a TestView Component in Vue.js
    </h2>
    <p>Here we have some data, printed dynamically {{ dynamicData }}</p>
</section>

</template>

<script>
export default {
    data() {
        return {
            dynamicData: "This is a dynamic string"
        }
    }
}
</script>

<style>
    p {
        color: red;
    }
</style>