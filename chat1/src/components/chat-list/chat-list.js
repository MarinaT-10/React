import { List } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {useCallback} from "react";
import { Chat } from "./chat";
import { Link, useParams, useNavigate } from "react-router-dom";
import { createConversation, deleteConversation } from "../../store/conversations"
import styles from "./chat/chat.module.css"

export const ChatList = () => {
  const conversations = useSelector(state => state.conversations.conversations);
  const { roomId } = useParams();
  const navigate = useNavigate ();
  const dispatch = useDispatch();

  const createConversationByName = () => {
    const name = prompt("Введите название нового чата");
    const isValidName = !conversations.includes (name)

    if (name && isValidName) {
      dispatch(createConversation(name))
    } else {
      alert("Название чата невалидное ")
    }
  };

  const deleteConversationByName = useCallback(
    (conversation) => {
      dispatch(deleteConversation(conversation));
      setTimeout(()=>navigate ("/chat"))
    }, [dispatch, navigate]
  );

  return (
    <List component="nav">
      <button className={styles.btn} onClick={createConversationByName }>Создать новый чат</button>
      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat 
          title={chat} 
          selected={roomId === chat}
          deleteConversationByName={deleteConversationByName}
          />
        </Link>
      ))}
    </List>
  );
};