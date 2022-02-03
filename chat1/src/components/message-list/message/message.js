import classNames from "classnames";
import styles from "./message.module.css";
import { format} from 'date-fns';

export function Message({ message }) {

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>{format(message?.date, "d.M.yyyy HH:mm:ss")}</p>
    </div>
  );
}