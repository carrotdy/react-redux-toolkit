import React, { ChangeEvent, FormEvent, useState } from "react";
import { ITodosState } from "../modules/todos";

interface TodosProps {
  todos: ITodosState;
  onCreate: (text: string) => void;
  onToggle: (id: number) => void;
}

const Todos: React.FC<TodosProps> = ({ todos, onCreate, onToggle }) => {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
  const [text, setText] = useState<string>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(""); // 인풋 초기화
  };

  // 컴포넌트 최적화를 위하여 React.memo를 사용합니다
  const TodoItem: React.FC<{ todo }> = React.memo(({ todo }) => (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  ));

  // 컴포넌트 최적화를 위하여 React.memo를 사용합니다
  const TodoList: React.FC<{ todos }> = React.memo(({ todos }) => (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  ));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
