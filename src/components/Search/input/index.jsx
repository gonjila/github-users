import { useCallback } from "react";
import styles from "./styles.module.scss";

function SearchInput({ changeInput, total }) {
  const onChange = useCallback(e => {
    const value = e.target.value;
    changeInput(value);
  }, []);

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search Github users"
        onChange={onChange}
      />
      {total && <span className={styles.resultNum}>{total} found</span>}
    </div>
  );
}

export default SearchInput;
