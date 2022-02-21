import {
  SEND_MESSAGE,
  DELETE_MESSAGE_BY_ID,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from "./types";
import { nanoid } from "nanoid"

const initialState = {
  pending: false,
  error: null,
  messages: {
    room1: [
      { author: "User", message: "value 1", date: new Date(), id: nanoid() },
      { author: "Bot", message: "value 2", date: new Date(), id: nanoid() },
    ],
  },
  errorSend: null,
  pendingSend: false,
};

export const messagesReducer = (state = initialState, action) => {
  console.log("messagesReducer")
  switch (action.type) {
    case SEND_MESSAGE:
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            action.payload.message,
            // { ...action.payload.message, id: nanoid(), date: new Date() },
          ],
        },
      };
    case DELETE_MESSAGE_BY_ID:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    case GET_MESSAGES_START:
      return { ...state, pending: true, error: null };
    case GET_MESSAGES_SUCCESS:
      return { ...state, pending: false, messages: action.payload };
    case GET_MESSAGES_ERROR:
      return { ...state, pending: false, error: action.payload };
    case SEND_MESSAGE_START:
      return { ...state, pendingSend: true, errorSend: null };
    case SEND_MESSAGE_ERROR:
      return { ...state, pendingSend: false, errorSend: action.payload };
    default:
      return state;
  }
};