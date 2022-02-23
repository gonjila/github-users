import styles from "./styles.module.scss";

import User from "../user";

function SearchResult({ list }) {
  console.log("list", list);
  return (
    <div
      className={styles.result}
      style={{ visibility: list ? "visible" : "hidden" }}
    >
      {list &&
        list.map(user => {
          return <User key={user.login} user={user} />;
        })}
    </div>
  );
}

export default SearchResult;
