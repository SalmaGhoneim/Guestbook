import styled, { css } from "styled-components";

export default styled.button`
  font-family: ${props => props.theme.font};
  font-size: 1.3rem;
  border: none;
  outline: "none";
  border-radius: 5px;
  padding: 7px 5px;
  cursor: pointer;
  height: ${props => props.height};
  color: ${props => props.theme.ghostWhite};
  width: ${props => props.width};
  margin: ${props => props.margin};
  letter-spacing: ${props => props.letterSpacing};

  ${props =>
    props.color &&
    css`
      background: ${props => props.theme[props.color]};
    `};
`;
