import React, { useState } from "react";
import FlexContainer from "../elements/FlexContainer";
import MessageCard from "./MessageCard";
import styled from "styled-components";

const MessagesContainer = props => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      from: "Salma",
      text:
        "Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats",
      date: Date.now(),
      replies: [
        {
          from: "Sugar",
          text:
            "thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe "
        },
        { from: "babe", text: "urw" },
        {
          from: "Sugar",
          text:
            "thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe "
        },
        { from: "babe", text: "urw" }
      ]
    },
    {
      id: "2",
      from: "Sugar",
      text: "Thanks baby",
      date: Date.now(),
      replies: []
    },
    {
      id: "1",
      from: "Salma",
      text:
        "Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats Congrats",
      date: Date.now(),
      replies: [
        {
          from: "Sugar",
          text:
            "thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe "
        },
        { from: "babe", text: "urw" },
        {
          from: "Sugar",
          text:
            "thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe thanks babe "
        },
        { from: "babe", text: "urw" }
      ]
    },

    {
      id: "2",
      from: "Sugar",
      text: "Thanks baby",
      date: Date.now(),
      replies: []
    },
    {
      id: "2",
      from: "Sugar",
      text: "Thanks baby",
      date: Date.now(),
      replies: []
    }
  ]);
  return (
    <FlexContainer
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      className={props.className}
    >
      {messages.map(message => (
        <MessageCard key={message.id} data={message} />
      ))}
    </FlexContainer>
  );
};

export default styled(MessagesContainer)`
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
`;
