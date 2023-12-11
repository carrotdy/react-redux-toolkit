import { createSlice } from "@reduxjs/toolkit";

// 인터페이스 정의
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

//초기 상태 선언
const initialState: Todo[] = [];
let nextId = 1;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
     return [...state, action.payload.todo];
    },
    TOGGLE_TODO: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
