import React, { useState } from "react";
import styled from "styled-components";
import TextField from "../elements/Textfield";
import Button from "../elements/Button";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import FlexContainer from "../elements/FlexContainer";

const Login = props => {
  const [userData, setUserData] = useState({
    username: null,
    password: null
  });
  const login = e => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      height="100vh"
      className={props.className}
    >
      <form className="contentsDisplay" onSubmit={login}>
        <FlexContainer
          alignItems="center"
          width="100%"
          maxWidth="450px"
          height="450px"
          margin="10px"
          padding="15px"
          direction="column"
          className="loginContainer"
        >
          <img className="logo" src={logo} alt="guestbook logo" />
          <TextField
            autoFocus
            width="90%"
            type="text"
            value={userData.username ? userData.username : ""}
            onChange={e => setUserData({ username: e.target.value })}
            placeholder="Username"
          />
          <TextField
            width="90%"
            type="password"
            value={userData.password ? userData.password : ""}
            onChange={e =>
              setUserData({ ...userData, password: e.target.value })
            }
            placeholder="Password"
          />
          <Button
            type="submit"
            color="primary"
            width="200px"
            margin="10px 0px"
            height="50px"
            letterSpacing="2px"
          >
            Login
          </Button>
          <FlexContainer className="textContainer">
            <p className="text">Don't have an account? </p>
            <NavLink className="text link" to="/signup">
              Sign Up now
            </NavLink>
          </FlexContainer>
        </FlexContainer>
      </form>
    </FlexContainer>
  );
};

export default styled(Login)`
  background: ${props => props.theme.ghostWhite};
  .contentsDisplay {
    display: contents;
  }
  .loginContainer {
    background: ${props => props.theme.secondary};
    border-radius: 10px;
    box-sizing: content-box;
  }
  .logo {
    height: 200px;
    width: auto;
  }
  .textContainer {
    font-family: ${props => props.theme.font};
  }
  .text {
    font-size: 0.8rem;
    margin: 10px 2px;
    color: ${props => props.theme.ghostWhite};
  }
  .link {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }
`;
