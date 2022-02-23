import styles from "./styles.module.scss";

function SearchInput() {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search Github users"
      />
      <span className={styles.resultNum}>1534 found</span>
    </div>
  );
}

export default SearchInput;
