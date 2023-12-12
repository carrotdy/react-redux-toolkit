import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./App.tsx";
import store from "./redux/Store.tsx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
