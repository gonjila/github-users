import { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.scss";
import useDebounce from "../../hooks/useDebounce";
import githubApi from "../../api";

import SearchTitle from "../../components/Search/title";
import SearchInput from "../../components/Search/input";
import SearchResult from "../../components/Search/result";

function SearchUser() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState({});

  const debouncedValue = useDebounce(inputValue, 500);

  const changeInput = useCallback(value => {
    setInputValue(value);
  }, []);

  useEffect(() => {
    if (debouncedValue !== "" && debouncedValue.length > 3) {
      githubApi(debouncedValue)
        .then(data => {
          // console.log("data.data", data);
          setResult({
            total: data.total_count,
            list: data.items,
            error_message: "",
          });
        })
        .then(() => {
          console.log("result", result);
        })
        .catch(err => {
          setResult({
            total: null,
            list: [],
            error_message:
              err.response && err.response.status
                ? err.response.data.message
                : "API error: Please try again later",
          });
        });
    }
  }, [debouncedValue]);

  return (
    <div className={styles.search}>
      <SearchTitle />
      <SearchInput changeInput={changeInput} total={result.total} />
      <SearchResult />
    </div>
  );
}

export default SearchUser;
