import styled, { css } from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;
