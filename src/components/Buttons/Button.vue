<template>
  <v-btn
    :loading="loading"
    @click="this.$emit('click')"
    id="button-txt"
    :class="type"
    :width="width"
    tile
  >
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  props: ["label", "type", "width", "loading"],
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
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: none !important;
}
</style>
