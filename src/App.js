import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/Main/Main";
import store from "./store/store";
import  "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
