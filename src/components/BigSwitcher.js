import styles from "./BigSwitcher.module.css";
const BigSwitcher = () => {
  const name = Math.random();
  return (
    <div className={styles.big_switcher}>
      <label>
        <input type="radio" name={name} />
      </label>
      <label className={styles.label}>
        <input type="radio" name={name} checked />1
      </label>
    </div>
  );
};
export default BigSwitcher;
