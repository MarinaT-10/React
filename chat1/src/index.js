import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from './index.module.css';

const Message = () => {
const [message, setMessage] = useState("");
const [messageList, setMessageList] = useState([]);

useEffect(() => {
  const lastMessage = messageList[messageList.length - 1];
  let timerId = null;

  if (lastMessage?.author !== "Bot" && messageList.length > 0){
    timerId = setTimeout(() => {
      setMessageList([...messageList, {author:"Bot", message: "Message from Bot"}]);
    }, 1500);
  }
  return () => clearInterval (timerId)
}, [messageList]);

const sendMessage = ()  => {
  if (message) {
    setMessageList ([...messageList, {author:"User", message}]);
    setMessage ("");
  } else {
    alert("Необходимо ввести сообщение перед отправкой!")
  }
}
  return (
    <div className={styles.message}>
      <h1 className={styles.messagetitle}>Message</h1>

<input onChange={(event) => setMessage(event.target.value)} placeholder='Введите сообщение' value={message} />
<button className={styles.messageBtn} onClick={sendMessage}>Отправить</button>
{messageList.map ((message) =>(
  <div>
    <h4 className={styles.messageAuthor}>{message.author}</h4>
    <p className={styles.messageText}>{message.message}</p>
    <hr />
  </div>
))}
    </div>
  )
}

const App = () => {
  return (
    <div className={styles.app}>
    <h1 className={styles.apptitle}>Чат App</h1>
      <Message />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

