<template>
  <v-card class="pa-6 card" outlined>
    <div class="d-flex justify-start align-center">
      <v-avatar size="100">
        <img :src="gitUser.avatar_url" alt="John" />
      </v-avatar>
      <p class="font-large ml-4 semibold c-grey">@{{ gitUser.login }}</p>
    </div>
    <v-btn @click="resetFilters" class="close-btn" icon v-if="isFiltering"
      ><v-icon color="red">mdi-close</v-icon></v-btn
    >
  </v-card>
</template>
<script>
export default {
  props: ["gitUser", "isFiltering"],

  methods: {
    openUserProfile() {
      return `https://github.com/${this.gitUser.login}`;
    },

    resetFilters() {
      this.$emit("reset");
    },
  },
};
</script>

<style scoped>
.close-btn {
  position: absolute;
  right: 5px;
  top: 5px;
}
.card {
  cursor: pointer;
  transition: all 0.5s ease !important;
}
.card:hover {
  -webkit-box-shadow: 0px 5px 7px -1px rgba(227, 227, 227, 1);
  -moz-box-shadow: 0px 5px 7px -1px rgba(227, 227, 227, 1);
  box-shadow: 0px 5px 7px -1px rgba(227, 227, 227, 1);
}
</style>
