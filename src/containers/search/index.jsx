import { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.scss";
import useDebounce from "../../hooks/useDebounce";
import githubApi from "../../api";

import SearchTitle from "../../components/Search/title";
import SearchInput from "../../components/Search/input";
import SearchResult from "../../components/Search/result";
import SearchError from "../../components/Search/error";

function SearchUser() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState({});

  const debouncedValue = useDebounce(inputValue, 500);

  const changeInput = useCallback(value => {
    setInputValue(value);
  }, []);

  useEffect(() => {
    if (debouncedValue !== "" && debouncedValue.length > 2) {
      setResults({
        status: "loading",
        total: null,
        list: [],
        error_message: null,
      });
      githubApi(debouncedValue)
        .then(data => {
          setResults({
            status: "success",
            total: data.total_count,
            list: data.items,
            error_message: null,
          });
        })
        .catch(err => {
          setResults({
            status: "failure",
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
      <SearchInput
        status={results.status}
        changeInput={changeInput}
        total={debouncedValue.length < 3 ? null : results.total}
      />
      {debouncedValue.length > 2 && (
        <SearchResult status={results.status} list={results.list} />
      )}
      <SearchError status={results.status} error={results.error_message} />
    </div>
  );
}

export default SearchUser;
