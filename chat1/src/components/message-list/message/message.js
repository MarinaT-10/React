import classNames from "classnames";
import { useDispatch } from "react-redux";
import {deleteMessage} from "../../../store/messages"
import styles from "./message.module.css";
import { format} from 'date-fns';

export function Message({ message, roomId }) {
const dispatch = useDispatch();
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <p>From: {message.author}</p> <hr/>
      <button className={styles.button} onClick={()=>dispatch(deleteMessage(roomId, message?.id))}>x</button>
      <p className={styles.text}>{message.message}</p>      
      <div><p className="date">{format (new Date(message?.date), "d.M.yyyy HH:mm:ss")}</p></div>
      
    </div>
  );
}