<template>
  <v-text-field
    class="field"
    v-model="field"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    outlined
    :prepend-inner-icon="inner"
    :disabled="disabled"
    :width="width"
  ></v-text-field>
</template>

<script>
export default {
  name: "TextField",
  props: [
    "fields",
    "model",
    "disabled",
    "width",
    "label",
    "placeholder",
    "type",
    "inner",
  ],
  data() {
    return {
      field: this.fields,
      models: this.model,
    };
  },
  created() {
    this.$emit("fields", this.field);
  },
};
</script>

<style scoped src="../../assets/css/textfield.css"></style>
