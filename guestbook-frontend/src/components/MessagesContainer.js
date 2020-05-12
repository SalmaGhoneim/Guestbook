import React, { useState, useEffect, useContext } from "react";
import FlexContainer from "../elements/FlexContainer";
import MessageCard from "./MessageCard";
import styled from "styled-components";
import { getMessages } from "../helpers/functions";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import Image from "../elements/Image";
import add from "../assets/add.svg";
import NewMessageCard from "./NewMessageCard";

const MessagesContainer = (props) => {
  const [messages, setMessages] = useState([]);
  const [creatingNewMessage, setCreatingNewMessage] = useState(false);
  const { loading } = useContext(AuthenticationContext);

  useEffect(() => {
    if (loading) return;
    getMessages()
      .then((response) => {
        setMessages(response.data);
      })
      .catch((
        error
        //display problem
      ) => console.log(error));
  }, [loading]);
  return (
    <FlexContainer
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      className={props.className}
    >
      <FlexContainer width="100%">
        <Image
          width="40px"
          height="40px"
          className={creatingNewMessage ? "disabled" : "add"}
          src={add}
          alt="create new message"
          onClick={() => setCreatingNewMessage(true)}
        />
      </FlexContainer>
      {!creatingNewMessage ? null : <NewMessageCard />}
      {messages.map((message) => (
        <MessageCard key={message._id} data={message} />
      ))}
    </FlexContainer>
  );
};

export default styled(MessagesContainer)`
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  .add {
    margin: 10px 5px 0px auto;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
  .disabled {
    margin: 10px 5px 0px auto;
    border-radius: 50%;
    padding: 5px;
  }
`;
