import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";


export const MessageList = () => {
  const s = useStyles();
  const { roomId } = useParams();
  const ref = useRef(null);

  const [messageList, setMessageList] = useState({
    room1: [
      { author: "User", message: "value 1", date: new Date() },
      { author: "Bot", message: "value 2", date: new Date() },
    ],
  });
  const [value, setValue] = useState("");

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList((state) => ({
          ...state,
          [roomId]: [
            ...(state[roomId] ?? []),
            { author, message, date: new Date() },
          ],
        }));
        setValue("");
      }
    },
    [roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messageList, handleScrollBottom]);

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author === "User") {
      setTimeout(() => {
        sendMessage("Hello from Bot", "Bot");
      }, 500);
    }
  }, [messageList, roomId, sendMessage]);

  const messages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
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
            {value && (
              <Send onClick={() => sendMessage(value)} className={s.icon} />
            )}
          </InputAdornment>
        }
      />
    </>
  );
};