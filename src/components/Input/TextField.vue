<template>
  <v-text-field
    class="field"
    v-model="field.text"
    :label="field.label"
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
    };
  },
  created() {
    this.$emit("fields", this.field);
  },
};
</script>
