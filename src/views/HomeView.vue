<template>
  <div>
    <v-container id="container">
      <v-layout wrap class="mt-8 d-flex justify-center">
        <v-flex md12 sm12 lg9 class="pr-6 pl-6 d-flex">
          <TextField inner="mdi-magnify" :fields="searchField" />
          <Button
            label="Search"
            type="primary"
            class="ml-3"
            @click="startFiltering()"
            :loading="loading"
          />
        </v-flex>

        <v-flex xs12 class="pl-6 d-flex justify-center align-center">
          <p class="font-small c-grey" v-if="!isFiltering && !error">
            Most popular account on github
          </p>
          <p class="font-small c-grey" v-else-if="isFiltering && !error">
            Results of search ( {{ searchField.text }} )
          </p>

          <p class="font-large red--text bold c-grey" v-else-if="error">
            Something went wrong, try again!!!
            <v-btn @click="resetFilters" icon outlined color="red" class="ml-4"
              ><v-icon color="b">mdi-close</v-icon></v-btn
            >
          </p>
        </v-flex>

        <!-- Looping over all users -->

        <v-layout wrap v-if="!isFiltering & !error">
          <v-flex
            lg4
            class="pa-4"
            v-for="(user, index) in allUsers"
            :key="index"
          >
            <userCard :gitUser="user" />
          </v-flex>
        </v-layout>

        <!-- Filtered results -->

        <v-flex lg4 v-else-if="!error">
          <userCard
            :gitUser="filteredUser"
            :isFiltering="isFiltering"
            @reset="resetFilters"
          />
        </v-flex>

        <!-- Rendering error -->

        <v-flex v-else-if="error">
          <v-img class="error-image" src="../assets/images/error.gif" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { getAll, getUser } from "../data/api";
import userCard from "@/components/Card/User.vue";
import Button from "@/components/Buttons/Button.vue";
export default {
  name: "home-view",
  components: {
    userCard,
    Button,
  },
  data() {
    return {
      allUsers: [],
      currentPage: 4,

      isFiltering: false,
      filteredUser: [],

      searchField: {
        label: "Search github user",
        text: "",
      },

      loading: false,
      error: false,
    };
  },
  methods: {
    getAllUsers() {
      getAll(this.currentPage).then((res) => {
        console.log(res);
        let users = res.data.items;
        this.allUsers = users;
      });
    },

    async startFiltering() {
      let username = this.searchField.text;
      if (username != "") {
        this.loading = true;

        getUser(username).then((res) => {
          if (res.status == 200) {
            this.error = false;
            this.setFilters(res.data);
          } else {
            this.handleError();
          }
        });
      }
    },

    // HANDLE USER FILTERS

    handleError() {
      this.loading = false;
      this.error = true;
      console.log("handle error");
    },

    setFilters(user) {
      this.filteredUser = user;
      this.isFiltering = true;
      this.loading = false;
    },

    resetFilters() {
      this.isFiltering = false;
      this.searchField.text = null;
      this.filteredUser = null;
      this.error = false;
    },
  },

  mounted() {
    this.getAllUsers();
  },
};
</script>

<style scoped>
#container {
  width: 1200px;
}
@media only screen and (max-width: 1200px) {
  #container {
    width: 90%;
  }
}

.error-image {
  width: 600px;
  margin: auto;
}
</style>
