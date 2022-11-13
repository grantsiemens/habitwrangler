import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
`
export {Flex}