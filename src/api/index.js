import axios from "axios";

function searchGithubUser(userName) {
  return axios
    .get(`https://api.github.com/search/users?q=${userName}&per_page=10`)
    .then(result => result.data);
}

export default searchGithubUser;
