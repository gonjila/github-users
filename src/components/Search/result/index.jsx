import { memo } from "react";

import styles from "./styles.module.scss";

import User from "../user";

function SearchResult({ list, status }) {
  if (status === "loading") {
    return (
      <div
        className={styles.result}
        style={{ visibility: list ? "visible" : "hidden" }}
      >
        Loading...
      </div>
    );
  }

  if (list?.length && status === "success") {
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

export default memo(SearchResult);
