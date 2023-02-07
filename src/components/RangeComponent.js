import { useState } from "react";
// import RangeInput from "../UI/RangeInput";
import propTypes from "prop-types";
import "./RangeComponent.css";
const RangeComponent = ({
  min = 0,
  max = 100,
  step = 1,
  showRange = false,
}) => {
  const [range, setRange] = useState(0);
  const style = {
    WebkitSliderThumb: {
      width: "70px",
      height: "90px",
    },
  };
  return (
    <div className="range_component">
      <div className={"range_wrapper"}>
        <input
          type="range"
          className={"range_input"}
          value={range}
          // size={range}
          onInput={(e) => {
            setRange(e.target.value);
          }}
          min={min}
          max={max}
          step={step}
          style={style}
        />
        <span
          className={"range_number"}
          style={{ left: 4 + range * 0.85 + "%" }}
        >
          {range}
        </span>
      </div>
      {showRange && (
        <div className="range_element">
          <div>{min}</div>
          <div>{max}</div>
        </div>
      )}
    </div>
  );
};
RangeComponent.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  showRange: propTypes.bool,
};
export default RangeComponent;
