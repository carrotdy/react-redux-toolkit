import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import counterReducer from "./modules/counter.tsx"
import todosReducer from "./modules/todos.tsx";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: todosReducer,
	},
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
