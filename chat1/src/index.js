import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { Header } from "./components";
import "./global.css";
import "./palette.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ChatPage, ProfilePage, HomePage} from "./pages";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />         
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);