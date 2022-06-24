import axios from "axios";

// get the most favorite users on GitHub
const getAll = (pagination) => {
  return axios.get(
    `search/users?q=repos:followers:%3E2000&language:javascript&page=${pagination.currentPage}&per_page=${pagination.perPage}`
  );
};

// get an user by his USERNAME
const getUser = (user) => {
  return axios.get(`/users/${user}`).catch((err) => {
    return err;
  });
};

export { getAll, getUser };
