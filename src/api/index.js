import axios from "axios";

async function searchGithubUser(userName) {
  const result = await axios.get(
    `https://api.github.com/search/users?q=${userName}&per_page=10`
  );
  return result.data;
}

export default searchGithubUser;
