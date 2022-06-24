<template>
  <div>
    <v-container class="defaultBg" id="container">
      <v-layout wrap class="mt-8 d-flex justify-center">
        <v-flex md12 sm12 lg9 class="pr-6 pl-6 d-flex">
          <TextField inner="mdi-magnify" :fields="searchField" />
          <Button
            label="Search"
            type="primary"
            class="ml-3"
            @click="startFiltering()"
            :loading="loading"
            :disabled="searchField.text == '' ? true : false"
          />
        </v-flex>

        <!--  ANCHOR: - Page texts States -->

        <v-flex xs12 class="pl-6 d-flex justify-center align-center transition">
          <!-- Default text -->
          <p class="font-small c-grey" v-if="!isFiltering && !error">
            Most popular account on GitHub -
            <span class="semibold"
              >({{ pagination.perPage * pagination.currentPage }} out of
              {{ pagination.totalUsers }})
            </span>
          </p>

          <!-- Text shown when filtering an user -->
          <p class="font-small c-grey" v-else-if="isFiltering && !error">
            Results of search ( {{ filterUserName }} )
          </p>

          <!-- Text shown when something goes wrong -->
          <p class="font-large red--text bold c-grey" v-else-if="error">
            Something went wrong, try again!!!
            <v-btn @click="resetFilters" icon outlined color="red" class="ml-4">
              <v-icon color="b">mdi-close</v-icon>
            </v-btn>
          </p>
        </v-flex>

        <!--  ANCHOR: - Looping over all users -->

        <v-layout wrap v-if="!isFiltering & !error && allUsers != null">
          <v-flex
            lg4
            md6
            sm6
            xs12
            class="pa-4"
            v-for="(user, index) in allUsers"
            :key="index"
          >
            <User :gitUser="user" />
          </v-flex>

          <v-flex sm12>
            <Paginate
              class="pt-4 pb-8"
              :paginateData="pagination"
              @paginate="getUserList"
            />
          </v-flex>
        </v-layout>

        <!--  ANCHOR: - Filtered results -->

        <v-flex lg4 v-else-if="!error">
          <User
            :gitUser="filteredUser"
            :isFiltering="isFiltering"
            @reset="resetFilters"
          />
        </v-flex>

        <!-- ANCHOR: Rendering error -->

        <v-flex v-else-if="error" class="white">
          <v-img class="error-image" src="../assets/images/error.gif" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { getAll, getUser } from "../data/api";
export default {
  name: "home-view",
  data() {
    return {
      allUsers: null,

      isFiltering: false,
      filterUserName: "",
      filteredUser: [],

      searchField: {
        label: "Search github user",
        text: "",
      },

      loading: false,
      error: false,

      pagination: {
        currentPage: 1,
        totalUsers: 100,
        perPage: 20,
      },
    };
  },

  methods: {
    getUserList() {
      this.loading = true;
      getAll(this.pagination).then((res) => {
        this.allUsers = res.data.items;
        this.loading = false;
        window.scrollTo(0, 0);
      });
    },

    startFiltering() {
      this.loading = true;
      getUser(this.searchField.text).then((res) => {
        if (res.status == 200) {
          this.setFilters(res.data);
        } else {
          this.handleError();
        }
        this.loading = false;
      });
    },

    // ANCHOR: HANDLE USER FILTERS

    handleError() {
      this.error = true;
    },

    setFilters(user) {
      this.filterUserName = user.login;
      this.error = false;
      this.filteredUser = user;
      this.isFiltering = true;
    },

    resetFilters() {
      this.isFiltering = false;
      this.searchField.text = null;
      this.filteredUser = null;
      this.error = false;
      this.filterUserName = null;
    },
  },

  mounted() {
    this.getUserList();
  },
};
</script>
