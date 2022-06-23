<template>
  <v-card class="pa-6 shadow transition" outlined>
    <div class="d-flex justify-start align-center">
      <v-avatar size="100">
        <img :src="gitUser.avatar_url" alt="John" />
      </v-avatar>
      <a
        class="font-large ml-4 semibold c-grey userName pointer link"
        target="blank"
        :href="openUserProfile()"
      >
        @{{ gitUser.login }}
      </a>
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
.userName {
  max-width: 200px;
  word-wrap: break-word;
}
</style>
