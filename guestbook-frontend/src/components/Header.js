import React, { useContext } from "react";
import FlexContainer from "../elements/FlexContainer";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import person from "../assets/person.svg";

import { AuthenticationContext } from "../contexts/AuthenticationContext";
import Image from "../elements/Image";

const Header = (props) => {
  const { user } = useContext(AuthenticationContext);
  return (
    <FlexContainer
      width="100%"
      height="70px"
      justifyContent="center"
      alignItems="center"
      className={props.className}
    >
      <Image height="60px" width="auto" src={logo} alt="Guestbook logo" />
      <FlexContainer className="username">
        <Image
          height="15px"
          width="auto"
          margin="0px 5px"
          src={person}
          alt={user.username}
        />
        {!user || !user.user ? null : (
          <p className="noMargin">{user.user.name}</p>
        )}
        {/* TODO: Add a logout button */}
      </FlexContainer>
    </FlexContainer>
  );
};

export default styled(Header)`
  background: ${(props) => props.theme.primary};
  position: sticky;
  top: 0;
  z-index: 1;
  .username {
    color: ${(props) => props.theme.secondary};
    font-size: 0.8rem;
    position: absolute;
    right: 10px;
    bottom: 15px;
    margin: 0px;
    cursor: default;
  }

  .noMargin {
    margin: 0px;
  }
`;
