import { createSlice } from "@reduxjs/toolkit";

//action type
// const ADD_TODO = "todos/ADD_TODO";
// const TOGGLE_TODO = "todos/TOGGLE_TODO";

//action 생성함수
//클로저 : nextId는 함수 addTodo 내에서 선언되었고, addTodo 함수가 반환되면서 외부에서 호출될 수 있게 된다.
//addTodo 함수는 클로저이며, 클로저 내부에서 nextId에 접근할 수 있다.
//각각의 addTodo 함수가 호출될 때마다 클로저에 저장된 nextId는 이전 호출에서의 값에 접근하여 1을 증가시키게 된다.
//이렇게 하면 각 호출에서 고유한 id를 생성할 수 있습니다.

// let nextId = 1;

// export const addTodo = (text) => ({
//   type: ADD_TODO,
//   todo: {
//     id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줌
//     text,
//   },
// });

// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   id,
// });

// 인터페이스 정의
export interface ITodosState {
  todos: Todo[];
}

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

//초기 상태 선언
const initialState: ITodosState[] = [];

//reducer
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat(action.todo);
//     case TOGGLE_TODO:
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, done: !todo.done } : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todos;

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
