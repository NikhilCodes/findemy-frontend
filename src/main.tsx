import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { Provider } from 'react-redux'
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <ToastContainer/>
    </Provider>
  </React.StrictMode>
);
