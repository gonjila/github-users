import styles from "./styles.module.scss";

import User from "../user";

function SearchResult({ list }) {
  console.log("list", list);
  if (list?.length) {
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

  return null;
}

export default SearchResult;
