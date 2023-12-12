import React, { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../modules/Todos";

interface TodosProps {
  todos: Todo[];
  onCreate: (text: string) => void;
  onToggle: (id: number) => void;
}

const Todos: React.FC<TodosProps> = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState<string>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(""); // 인풋 초기화
  };

  // 컴포넌트 최적화를 위하여 React.memo를 사용
  const TodoItem: React.FC<{ todo: Todo }> = React.memo(({ todo }) => (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  ));

  const TodoList: React.FC<{ todos:Todo[] }> = React.memo(({ todos }) => (
    <ul>
      {todos.map((todo: Todo) => (
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
