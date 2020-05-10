import React from "react";
import FlexContainer from "../elements/FlexContainer";
import styled from "styled-components";
import copyright from "../assets/copyright.svg";
import Image from "../elements/Image";

const Footer = props => {
  return (
    <FlexContainer
      width="100%"
      height="40px"
      justifyContent="center"
      alignItems="center"
      className={props.className}
    >
      <Image
        height="15px"
        width="auto"
        margin="0px 4px"
        src={copyright}
        alt="copyright"
      />
      All copyrights reserved 2020
    </FlexContainer>
  );
};

export default styled(Footer)`
  background: ${props => props.theme.primary};
  z-index: 1;
  font-size: 0.8rem;
  color: ${props => props.theme.ghostWhite};
`;
