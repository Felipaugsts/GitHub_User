import Vue from "vue";

const components = {
  //Button
  TextField: () => import("@/components/Input/TextField"),
  Button: () => import("@/components/Buttons/Button"),
  Paginate: () => import("@/components/Paginate/Pagination"),
  User: () => import("@/components/Card/User"),
  NavigationBar: () => import("@/components/Page/Navbar"),
};

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
);
