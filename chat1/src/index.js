import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { Header } from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ChatPage, ProfilePage, HomePage} from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";

import "./global.css";
import "./palette.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}> 
    <CustomThemeProvider>
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />         
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);