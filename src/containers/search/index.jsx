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
    if (debouncedValue !== "" && debouncedValue.length > 3) {
      setResults({});
      githubApi(debouncedValue)
        .then(data => {
          setResults({
            total: data.total_count,
            list: data.items,
            error_message: null,
          });
        })
        .catch(err => {
          setResults({
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

  // TODO როცა 3ზე ნაკლები ასო იქნება დაწერილი მაშინ result არ უნდა გამოჩნდეს.
  // TODO უნდა დაიწეროს loading როცა იტვირთება მონაცემები.
  // XXX უნდა დაიწეროს typing როცა იკრიპება რამე.

  return (
    <div className={styles.search}>
      <SearchTitle />
      <SearchInput
        changeInput={changeInput}
        total={!debouncedValue ? null : results.total}
      />
      <SearchResult list={results.list} />
      <SearchError error={results.error_message} />
    </div>
  );
}

export default SearchUser;
