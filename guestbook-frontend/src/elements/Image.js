import styled from "styled-components";

export default styled.img`
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  margin: ${props => props.margin};
`;
