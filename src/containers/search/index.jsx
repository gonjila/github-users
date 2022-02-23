import styles from "./styles.module.scss";

import SearchTitle from "../../components/Search/title";
import SearchInput from "../../components/Search/input";
import SearchResult from "../../components/Search/result";

function SearchUser() {
  return (
    <div className={styles.search}>
      <SearchTitle />
      <SearchInput />
      <SearchResult />
    </div>
  );
}

export default SearchUser;
