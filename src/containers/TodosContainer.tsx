import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos.tsx";
import { Todo, todoActions } from "../modules/Todos.tsx";

interface IRootState {
  todos: Todo[];
}

const TodosContainer: React.FC = () => {
  const todos = useSelector((state: IRootState) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text: string) =>
    dispatch(
      todoActions.ADD_TODO({ todo: { id: Date.now(), text, done: false } })
    );

  const onToggle = useCallback(
    (id: number) => dispatch(todoActions.TOGGLE_TODO({ id })),
    [dispatch]
  );

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
