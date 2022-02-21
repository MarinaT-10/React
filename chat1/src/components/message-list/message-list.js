import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material"
import {
  messagesSelectorByRoomId,
  sendMessageWithBot,
  sendMessageFB
} from "../../store/messages";
import { Message } from "./message";
import { useStyles } from "./use-styles";


export const MessageList = () => {
  const s = useStyles();
  const { roomId } = useParams();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelectorByRoomId(roomId));

  const [value, setValue] = useState("");

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(
          sendMessageFB(roomId, { author: author || "Bot", message })
        );
        setValue("");
      }
    },
    [dispatch, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messages, handleScrollBottom]);


  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message key={index} message={message} roomId={roomId} />
        ))}
      </div>

      <Input
        className={s.input}
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={() => send(value)} className={s.icon} />}
          </InputAdornment>
        }
      />
    </>
  );
};