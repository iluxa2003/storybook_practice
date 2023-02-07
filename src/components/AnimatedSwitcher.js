import styles from "./AnimatedSwitcher.module.css";
import CheckInput from "../UI/CheckInput";
import propTypes from "prop-types";
const AnimatedSwitcher = ({
  checkedBackground,
  checked,
  background,
  disabled = false,
  func,
}) => {
  return (
    <div>
      <CheckInput
        className={styles.switch}
        type="checkbox"
        disabled={disabled}
        onChange={func}
        bk={background}
        checked={checked}
        checkedBackground={checkedBackground}
      />
    </div>
  );
};
AnimatedSwitcher.propTypes = {
  checkedBackground: propTypes.string,
  background: propTypes.string,
  disabled: propTypes.bool,
  checked: propTypes.bool,
};
export default AnimatedSwitcher;
