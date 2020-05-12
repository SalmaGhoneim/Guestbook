import React, { useState, useContext } from "react";
import styled from "styled-components";
import FlexContainer from "../elements/FlexContainer";
import Image from "../elements/Image";
import person from "../assets/person.svg";
import done from "../assets/done.svg";
import Textfield from "../elements/Textfield";
import { createMessage } from "../helpers/functions";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

const NewMessageCard = (props) => {
  const { user } = useContext(AuthenticationContext);

  const [text, setText] = useState("");

  const date = new Date();

  const changeText = (e) => {
    setText(e.target.value);
  };
  const submitMessage = () => {
    createMessage({ text: text })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const textFieldWithDone = (value, onChange, onDone, width, onfocus) => (
    <form style={{ width: width }} className="selfCenter" onSubmit={onDone}>
      <FlexContainer width="100%" alignItems="center">
        <Textfield
          autoFocus
          required
          width="80%"
          type="text"
          value={value}
          onChange={onChange}
          onClick={onfocus}
          placeholder="Type your new message here"
        />
        <Image
          onClick={onDone}
          className="action"
          width="20px"
          height="20px"
          margin="10px"
          src={done}
          alt="Done"
        />
      </FlexContainer>
    </form>
  );

  return (
    <FlexContainer
      minWidth="100%"
      margin="10px"
      minHeight="100px"
      width="95%"
      direction="column"
      className={props.className}
    >
      <FlexContainer direction="column" minHeight="100px" padding="10px">
        <p className="dateText">
          {date.toString().split(" ").slice(0, 5).join(" ")}
        </p>
        <FlexContainer alignItems="center">
          <FlexContainer alignItems="center">
            <Image
              width="30px"
              height="40px"
              src={person}
              alt={user.user.name}
            />
            <p className="text username">{user.user.name}:</p>
          </FlexContainer>

          {textFieldWithDone(text, changeText, submitMessage, "90%")}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default styled(NewMessageCard)`
  background: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.font};
  flex: 6;
  border-radius: 10px;
  box-sizing: content-box;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
  }
  .text {
    color: ${(props) => props.theme.ghostWhite};
    margin: 10px 5px;
    letter-spacing: 1.3px;
    line-height: 1.3;
  }
  .dateText {
    color: ${(props) => props.theme.primary};
    margin: 10px 5px 0px 5px;
    font-size: 0.7rem;
    margin-left: auto;
  }
  .action {
    margin: 10px 5px 0px 5px;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.ghostWhite};
    }
  }
  .selfCenter {
    align-self: center;
  }
  .username {
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    margin-right: 5px;
  }
`;
