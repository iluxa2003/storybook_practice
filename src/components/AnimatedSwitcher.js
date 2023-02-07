import styles from "./AnimatedSwitcher.module.css";
const AnimatedSwitcher = ({ checked, background, disabled = false, func }) => {
  return (
    <div>
      <input
        className={styles.switch}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={func}
        style={{ background }}
      />
    </div>
  );
};
export default AnimatedSwitcher;
