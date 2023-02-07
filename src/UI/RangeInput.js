import styled from "styled-components";

const RangeInput = styled.input`
  &::-webkit-slider-thumb {
    ${(props) => `width:${parseInt(props.size) / 2.2}px;
    height:${parseInt(props.size) / 2}px;
`}
  }
`;
export default RangeInput;
