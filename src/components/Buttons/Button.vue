<template>
  <v-btn
    :loading="loading"
    @click="emitEvent()"
    id="button-txt"
    :class="type"
    tile
  >
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  props: ["label", "type", "loading"],

  methods: {
    emitEvent() {
      console.log("click");
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.primary {
  background: rgb(75, 75, 127);
  color: white;
}
.secondary {
  background: white;
  color: black;
  border: 1px solid rgb(75, 75, 127);
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
#button-txt {
  font-family: "Montserrat", sans-serif;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: none !important;
  height: 55px;
  border-radius: 4px;
  width: 90px;
}
</style>
