import styles from "./styles.module.scss";

function SearchError({ error }) {
  if (error) {
    return <div className={styles.errorWrapper}>{error}</div>;
  }
  return null;
}

export default SearchError;
