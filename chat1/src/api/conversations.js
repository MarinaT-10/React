import { db } from "./firebase";

export const getConversationsApi = () => {
  return db.ref("conversations").get();
};

export const createConversationApi = (roomId) => {
  return db
    .ref("conversations")
    .child(roomId)
    .set({ title: roomId, value: "" });
};



//   setTimeout(() => {
//     createConversationApi("room11");
//     createConversationApi("room12");
// }, 2000);