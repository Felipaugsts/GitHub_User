<template>
  <div>
    <v-pagination
      v-model="pagination.currentPage"
      :length="pagination.totalUsers / pagination.perPage"
      circle
      @input="paginate"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  props: ["paginateData"],
  data() {
    return {
      pagination: this.paginateData,
    };
  },
  methods: {
    paginate() {
      this.$emit("paginate");
    },
  },
};
</script>
