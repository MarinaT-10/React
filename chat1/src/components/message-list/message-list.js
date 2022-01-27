import React, { useEffect, useState, useRef } from 'react';
import { useStyles } from "./use-styles";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message/message"

export const MessageList = () => {
  const styles = useStyles()
  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus()
  }, []);


  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (lastMessage?.author !== "Bot" && messageList.length > 0) {
      timerId = setTimeout(() => {
        setMessageList([...messageList, { author: "Bot", message: "Message from Bot" }]);
      }, 1500);
    }
    return () => clearInterval(timerId)
  }, [messageList]);

  const sendMessage = () => {
    if (value) {
      setMessageList([...messageList, { author: "User", message: value }]);
      setValue("");
    } else {
      alert("Необходимо ввести сообщение перед отправкой!")
    }
  }

  const handlePressInput = (event) => {
    if (event.code === "Enter") {
      sendMessage()
    }
  };

  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.input}
        fullWidth
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handlePressInput}
        placeholder='Введите сообщение'
        value={value}
        inputRef={ref}
        endAdornment={
          value && <InputAdornment position="end">
            <Send className={styles.icon}
              onClick={sendMessage} />
          </InputAdornment>}
      />
      {messageList.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  )
}
