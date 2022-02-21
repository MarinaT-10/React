import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { Header, PublicRoute, PrivateRoute } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChatPage, ProfilePage, HomePage, GistsPage, LoginPage, SignUpPage } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
import { firebaseApp } from "./api/firebase";
import "./global.css";
import "./palette.css";


const App = () => {
  const [session, setSession] = useState(null)
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user)
      } else {
        setSession(null)
      }
    })
  }, [])

  const isAuth = !!session;

  return <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider>
          <BrowserRouter>
            <Header session={session} />
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/profile" element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>
              }
              />

              <Route path="/chat/*" element={
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute>
              }
              />
              <Route path="/gists" element={
                <PrivateRoute isAuth={isAuth}>
                  <GistsPage />
                </PrivateRoute>
              }
              />

              <Route path="/login" element={
                <PublicRoute isAuth={isAuth}>
                  <LoginPage />
                </PublicRoute>
              }
              />

              <Route path="/sign-up" element={
                <PublicRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublicRoute>
              }
              />

              <Route path="/*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
}

ReactDOM.render(<App />, document.getElementById("root"));