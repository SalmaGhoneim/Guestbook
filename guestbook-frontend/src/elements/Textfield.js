import styled from "styled-components";

export default styled.input`
  font-family: ${props => props.theme.font};
  font-size: 1.1rem;
  border: none;
  outline: "none";
  border-radius: 5px;
  padding: 7px 5px;
  border: 1px solid;
  border-color: ${props => props.theme.secondary};
  background: ${props => props.theme.ghostWhite};
  border: ${props => props.border};
  width: ${props => props.width};
  color: black;
  height: 50px;
  margin: 10px 0px;
  padding: 0px 10px;
  letter-spacing: 2px;
  &::placeholder {
    color: black;
    font-size: 1.1rem;
  }
`;
