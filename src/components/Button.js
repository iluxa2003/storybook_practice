import propTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({
  label,
  onClick,
  backgroundColor = "black",
  color = "white",
  borderRadius = "14px",
  size = "medium",
  margin = "5px",
  iconType = "none",
  icon,
}) => {
  let padding = "16px";
  if (size === "small") {
    padding = "16px";
  }
  if (size === "medium") {
    padding = "16px 32px";
  }
  if (size === "large") {
    padding = "16px 130px";
  }
  const style = {
    background: backgroundColor,
    borderRadius,
    padding,
    color,
    margin,
  };
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      <img
        className={
          styles.button_icon +
          " " +
          (iconType === "left" ? styles.left_side : "") +
          (iconType === "center" ? styles.center : "") +
          (iconType === "none" ? styles.none : "")
        }
        src={icon}
      />
      <div className={styles.button_text}>{label}</div>
    </button>
  );
};
Button.propTypes = {
  label: propTypes.string,
  borderRadius: propTypes.string,
  backgroundColor: propTypes.string,
  color: propTypes.string,
  icon: propTypes.object,
  iconType: propTypes.oneOf(["left", "center", "none"]),
  size: propTypes.oneOf(["small", "medium", "large"]),
};
export default Button;
