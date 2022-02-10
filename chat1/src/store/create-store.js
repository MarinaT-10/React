import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { logger, timeScheduler, botMessage} from "./middlewares";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile'],
}

const reducer =   combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer, 
  messages: messagesReducer, 
})
export const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(logger, timeScheduler, botMessage, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

// compose (() => {}, () => {})

export const persistor = persistStore(store);
