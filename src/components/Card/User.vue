<template>
  <v-card class="pa-6 shadow transition" outlined>
    <div class="d-flex justify-start align-center">
      <v-avatar size="100">
        <img :src="gitUser.avatar_url" alt="John" />
      </v-avatar>

      <div>
        <a
          class="font-large ml-4 semibold c-grey userName pointer link"
          target="blank"
          :href="`https://github.com/${this.gitUser.login}`"
        >
          @{{ gitUser.login }}
        </a>

        <p v-if="isFiltering" class="ml-4 mt-4">{{ gitUser.bio }}</p>
      </div>
    </div>

    <v-btn @click="resetFilters" class="close-btn" icon v-if="isFiltering">
      <v-icon color="red"> mdi-close </v-icon>
    </v-btn>
  </v-card>
</template>
<script>
export default {
  props: ["gitUser", "isFiltering"],

  methods: {
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
