import styled from "styled-components";

const CheckInput = styled.input`
  ${(props) => `background:${props.bk};
  &:checked {
     background:${props.checkedBackground};
`}
`;
export default CheckInput;
