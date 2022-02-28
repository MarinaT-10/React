import { nanoid } from "nanoid";
import { db } from "./firebase";


export const getMessagesApi = () => {
  return db.ref("messages").get();
};

export const sendMessageApi = async (roomId, message) => {
  
  const newMessage = { ...message, id: nanoid(), date: String(new Date()) };

  await db.ref("messages").child(roomId).push(newMessage);

  return newMessage;
};

//   setTimeout(() => {
//     console.log("sendMessageApi", sendMessageApi)
//     sendMessageApi("room11", {author: "User", message: "test 1"});
//     sendMessageApi("room11", {author: "User", message: "test 2"});
//     sendMessageApi("room12", {author: "User", message: "test 3"});
// }, 2000);


