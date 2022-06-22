import Vue from "vue";

const components = {
  //Button
  TextField: () => import("@/components/Input/TextField"),
};

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
);
