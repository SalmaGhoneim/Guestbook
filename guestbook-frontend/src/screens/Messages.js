import React from "react";
import FlexContainer from "../elements/FlexContainer";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MessagesContainer from "../components/MessagesContainer";

const Messages = props => {
  return (
    <FlexContainer
      minHeight="100vh"
      direction="column"
      className={props.className}
    >
      <FlexContainer
        direction="column"
        alignItems="center"
        className="flexGrow"
      >
        <Header />
        <p className="title">Messages</p>
        <MessagesContainer />
      </FlexContainer>
      <Footer />
    </FlexContainer>
  );
};

export default styled(Messages)`
  background: ${props => props.theme.ghostWhite};
  .flexGrow {
    flex: 1 0 auto;
  }
  .title {
    font-family: ${props => props.theme.font};
    font-weight: 700;
    color: ${props => props.theme.secondary};
    font-size: 2rem;
    margin: 50px 0px 50px 0px;
    letter-spacing: 3px;
  }
`;
