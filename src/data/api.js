import axios from "axios";

const getAll = (page) => {
  return axios.get(
    `search/users?q=repos:followers:%3E2000&language:javascript&page=${page}&per_page=20`
  );
};

const getUser = (user) => {
  return axios.get(`/users/${user}`).catch((err) => {
    console.log("erro api", err);
    return err;
  });
};

export { getAll, getUser };
