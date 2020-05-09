import React, { useState } from "react";
import styled from "styled-components";
import TextField from "../elements/Textfield";
import Button from "../elements/Button";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import FlexContainer from "../elements/FlexContainer";

const Signup = props => {
  const [newUserData, setNewUserData] = useState({
    name: "",
    username: "",
    email: "",
    age: 0,
    password: ""
  });
  const signup = e => {
    console.log("here");
    e.preventDefault();
    const validEmail = newUserData.email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (validEmail) {
      console.log("accepted");
    }
  };
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      height="100vh"
      className={props.className}
    >
      <form className="contentsDisplay" onSubmit={signup}>
        <FlexContainer
          alignItems="center"
          width="100%"
          maxWidth="450px"
          height="600px"
          margin="10px"
          padding="15px"
          direction="column"
          className="signupContainer"
        >
          <img className="logo" src={logo} alt="guestbook logo" />
          <TextField
            autoFocus
            required
            width="90%"
            type="text"
            value={newUserData.name ? newUserData.name : ""}
            onChange={e =>
              setNewUserData({ ...newUserData, name: e.target.value })
            }
            placeholder="Name"
          />
          <TextField
            required
            width="90%"
            type="text"
            value={newUserData.username ? newUserData.username : ""}
            onChange={e =>
              setNewUserData({ ...newUserData, username: e.target.value })
            }
            placeholder="Username"
          />
          <TextField
            required
            width="90%"
            type="email"
            value={newUserData.email ? newUserData.email : ""}
            onChange={e =>
              setNewUserData({ ...newUserData, email: e.target.value })
            }
            placeholder="email"
          />
          <TextField
            required
            width="90%"
            type="number"
            max={100}
            value={newUserData.age ? newUserData.age : ""}
            onChange={e =>
              setNewUserData({ ...newUserData, age: e.target.value })
            }
            placeholder="Age"
          />
          <TextField
            required
            width="90%"
            type="password"
            value={newUserData.password ? newUserData.password : ""}
            onChange={e =>
              setNewUserData({ ...newUserData, password: e.target.value })
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
            Sign Up
          </Button>
          <FlexContainer className="textContainer">
            <p className="text">Already have an account? </p>
            <NavLink className="text link" to="/login">
              Login instead
            </NavLink>
          </FlexContainer>
        </FlexContainer>
      </form>
    </FlexContainer>
  );
};

export default styled(Signup)`
  background: ${props => props.theme.secondary};
  .contentsDisplay {
    display: contents;
  }
  .signupContainer {
    background: ${props => props.theme.ghostWhite};
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
    color: ${props => props.theme.secondary};
  }
  .link {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }
`;
