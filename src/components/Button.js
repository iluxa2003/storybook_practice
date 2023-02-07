import propTypes from "prop-types";
const Button = ({
  label,
  onClick,
  backgroundColor = "black",
  color = "white",
  borderRadius = "14px",
  size = "medium",
  margin = "5px",
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
    backgroundColor,
    border: "none",
    borderRadius,
    padding,
    color,
    margin,
    cursor: "pointer",
    fontWeight: "600",
    minWidth: "47px",
  };
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};
Button.propTypes = {
  label: propTypes.string,
  borderRadius: propTypes.string,
  backgroundColor: propTypes.string,
  size: propTypes.oneOf(["small", "medium", "large"]),
};
export default Button;
