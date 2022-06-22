<template>
  <v-app>
    <v-container id="container">
      <v-layout class="mt-8 d-flex justify-center">
        <v-flex md12 sm12 lg8>
          <TextField
            :field="FilterField"
            placeholder="Search"
            inner="mdi-magnify"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "home-view",
  data() {
    return {
      FilterField: "",
    };
  },
};
</script>

<style scoped>
#container {
  width: 1200px;
}
@media only screen and (max-width: 1200px) {
  #container {
    width: 90%;
  }
}
</style>
