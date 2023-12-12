import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/Counter.tsx";
import todosReducer from "../modules/Todos.tsx";

const Store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: todosReducer,
	},
});

export default Store;