<template>
  <v-app>
    <navBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navBar from "@/components/Page/Navbar.vue";
export default {
  name: "App",
  components: {
    navBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import url("./assets/css/global.css");
</style>
