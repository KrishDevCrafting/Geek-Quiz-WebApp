import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import user from "./components/Features/user";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    user: user,
  },
});
//import Main from "./components/Cards/Main";
//import App from './App';
// import { NavBar } from "./components/navbar/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
///reportWebVitals();
