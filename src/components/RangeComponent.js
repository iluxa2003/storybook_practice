import { useState } from "react";
import RangeInput from "../UI/RangeInput";
import "./RangeComponent.css";
const RangeComponent = ({ min = "0", max = "100", step = "1" }) => {
  const [range, setRange] = useState(0);
  const style = {
    WebkitSliderThumb: {
      width: "70px",
      height: "90px",
    },
  };
  return (
    <div className={"range_wrapper"}>
      <input
        type="range"
        className={"range_input"}
        value={range}
        // size={range}
        onInput={(e) => {
          setRange(e.target.value);
          e.target.textContent = e.target.value;
        }}
        min={min}
        max={max}
        step={step}
        style={style}
      />
      {/* <label className={"range_number"}>{range}</label> */}
    </div>
  );
};

export default RangeComponent;
