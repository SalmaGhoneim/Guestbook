import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  justify-content: ${props => props.justifyContent};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;
