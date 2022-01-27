import React from 'react';
import ReactDOM from 'react-dom';
import { MessageList } from './components';
// import {List} from './components/list/list-item/list-item';
import { MyList } from "./components"
import "./palette.css";
import styles from "./index.module.css";


const App = () => {
  return (
    <div className={styles.app}>
      <MyList />
      <MessageList />
    </div>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

