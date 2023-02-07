import styles from "./Search.module.css";
import searchSign from "../img/search.svg";
const Search = () => {
  return (
    <label className={styles.search_wrap}>
      <input className={styles.search} placeholder={"Search products"} />
      <img className={styles.search_sign} src={searchSign} />
    </label>
  );
};
export default Search;
