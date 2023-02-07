import propTypes from "prop-types";
import styles from "./Search.module.css";
import searchSign from "../img/search.svg";
import closeButton from "../img/x-circle.svg";
import { useState, useEffect } from "react";
const Search = ({
  placeholder = "Search products",
  leftSvg = searchSign,
  state = "unfocused",
}) => {
  const [focus, setfocus] = useState(false);
  useEffect(() => {
    setfocus(state === "focused" ? true : false);
  }, [state]);
  return (
    <div className={styles.search_wrap}>
      <input
        className={styles.search + " " + (focus && styles.focused)}
        placeholder={placeholder}
        onFocus={() => {
          setfocus(true);
        }}
        onBlur={() => {
          setfocus(false);
        }}
      />
      <img
        className={styles.search_sign + " " + (focus ? styles.focused : "")}
        src={leftSvg}
      />
      <button
        className={styles.close_button + " " + (focus ? styles.focused : "")}
        onClick={() => {
          setfocus(false);
        }}
      >
        <img src={closeButton} />
      </button>
    </div>
  );
};
Search.propTypes = {
  placeholder: propTypes.string,
  leftSvg: propTypes.object,
  state: propTypes.oneOf(["unfocused", "focused"]),
};
export default Search;
