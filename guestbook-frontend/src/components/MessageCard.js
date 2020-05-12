import React, { useState } from "react";
import styled from "styled-components";
import FlexContainer from "../elements/FlexContainer";
import Image from "../elements/Image";
import person from "../assets/person.svg";
import arrowDown from "../assets/arrowDown.svg";
import cancel from "../assets/cancel.svg";
import replyToMessage from "../assets/reply.svg";
import done from "../assets/done.svg";
import edit from "../assets/edit.svg";

import deleteIcon from "../assets/delete.svg";

import Textfield from "../elements/Textfield";
import { editMessage, deleteRequest } from "../helpers/functions";

const MessageCard = (props) => {
  const [status, setStatus] = useState({
    editing: false,
    repliesOpen: false,
    replying: false,
  });
  const [edited, setEdited] = useState(props.data.text);
  const [reply, setReply] = useState("");

  const date = new Date(props.data.date);

  const editClicked = () => {
    setStatus({ ...status, editing: true });
  };
  const changeEdited = (e) => {
    setEdited(e.target.value);
  };
  console.log(props.data);
  const submitEdited = (e) => {
    e.preventDefault();
    // call edit endpoint
    editMessage(props.data._id, { text: edited })
      .then((response) => {
        // TODO: show success and edit message
        setStatus({ ...status, editing: false });
        console.log(response);
      })
      .catch((error) =>
        // TODO: show error
        console.log(error)
      );
  };

  const toggleReply = () => {
    if (status.repliesOpen === true) {
      setStatus({ ...status, repliesOpen: false, replying: false });
    } else {
      setStatus({ ...status, repliesOpen: true });
    }
  };
  const replyClicked = () => {
    setStatus({ ...status, replying: true, repliesOpen: true });
  };
  const changeReply = (e) => {
    setReply(e.target.value);
  };
  const submitReply = (e) => {
    e.preventDefault();
    console.log("hello");
    editMessage(props.data._id, { reply: reply })
      .then((response) => {
        // TODO: show success and add reply
        setStatus({ ...status, replying: false });
        console.log(response);
      })
      .catch((error) =>
        // TODO: show error
        console.log(error)
      );
  };

  const deleteMessage = () => {
    deleteRequest(props.data._id)
      .then((response) => {
        // TODO: show success and delete message
        console.log(response);
      })
      .catch((error) => {
        // TODO: show error
        console.log(error);
      });
  };

  const cancelAll = () => {
    setStatus({ ...status, editing: false, replying: false });
    setEdited(props.data.text);
    setReply("");
  };

  const textFieldWithDone = (
    blockFor,
    value,
    onChange,
    onDone,
    width,
    onfocus
  ) => (
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
          placeholder={
            blockFor === "reply" ? "Leave a reply" : "Edit a message"
          }
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
      minHeight="150px"
      width="95%"
      direction="column"
      className={props.className}
    >
      <FlexContainer direction="column" minHeight="150px" padding="10px">
        <p className="dateText">
          {date.toString().split(" ").slice(0, 5).join(" ")}
        </p>
        <FlexContainer
          direction="row"
          alignItems={status.editing ? "center" : "flex-start"}
        >
          <FlexContainer alignItems="center">
            <Image
              width="30px"
              height="40px"
              src={person}
              alt={props.data.authorName}
            />
            {/* TODO: username */}
            <p className="text username">{props.data._id}:</p>
          </FlexContainer>

          {status.editing ? (
            textFieldWithDone(
              "editingMessage",
              edited,
              changeEdited,
              submitEdited,
              "100%"
            )
          ) : (
            <p className="text"> {props.data.text}</p>
          )}
        </FlexContainer>
        <FlexContainer className="actions">
          {!status.editing && !status.replying ? null : (
            <Image
              onClick={cancelAll}
              className="action"
              width="20px"
              height="20px"
              src={cancel}
              alt="Cancel"
            />
          )}
          <Image
            onClick={replyClicked}
            className="action"
            width="20px"
            height="20px"
            src={replyToMessage}
            alt={"Reply"}
          />
          <Image
            onClick={editClicked}
            className="action"
            width="20px"
            height="20px"
            src={edit}
            alt={"Edit"}
          />
          <Image
            onClick={toggleReply}
            className={status.repliesOpen ? "action rotate180" : "action"}
            width="20px"
            height="20px"
            src={arrowDown}
            alt="View Replies"
          />
          <Image
            onClick={deleteMessage}
            className="action"
            width="20px"
            height="20px"
            src={deleteIcon}
            alt="delete"
          />
        </FlexContainer>
      </FlexContainer>
      {!status.repliesOpen ? null : (
        <FlexContainer width="90%" direction="column" alignSelf="center">
          {props.data.replies.map((reply) => (
            <p className="text replyStyling">
              {/* Show username of replier */}
              {/* <span className="username">{reply.from}:</span> */}
              {reply.text}
            </p>
          ))}
        </FlexContainer>
      )}

      {!status.repliesOpen
        ? null
        : textFieldWithDone(
            "reply",
            reply,
            changeReply,
            submitReply,
            "90%",
            replyClicked
          )}
    </FlexContainer>
  );
};

export default styled(MessageCard)`
  background: ${(props) => props.theme.secondary};
  font-family: ${(props) => props.theme.font};
  flex: 6;
  border-radius: 10px;
  box-sizing: borders-box;
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
  .actions {
    margin: auto 0px 0px auto;
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
  .replyStyling {
    padding-bottom: 5px;
    margin: 0px 0px;
  }
  .rotate180 {
    transform: rotate(180deg);
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
