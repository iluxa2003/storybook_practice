import styles from "./BigSwitcher.module.css";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
const BigSwitcher = ({ list, disabled = false }) => {
  const name = Math.random();
  const [listOfItems, setListOfItems] = useState([]);
  useEffect(() => {
    setListOfItems(list);
  }, [list]);
  return (
    <div className={styles.big_switcher}>
      {listOfItems.map((item) => {
        let id = Math.random();
        return (
          <span className={styles.label_wrap} key={Math.random()}>
            <input
              type="radio"
              id={id}
              name={name}
              disabled={disabled}
              defaultChecked={item.checked}
            />

            <label htmlFor={id}>{item.label}</label>
          </span>
        );
      })}
    </div>
  );
};
BigSwitcher.propTypes = {
  disabled: propTypes.bool,
  list: propTypes.array,
};
export default BigSwitcher;
