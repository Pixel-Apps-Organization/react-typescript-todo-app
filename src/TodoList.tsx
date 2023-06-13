import React from "react";
import { Todo, ToggleComplete } from "./types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete
}) => {
  const activeTodos = todos.filter(todo => !todo.complete);
  const completedTodos = todos.filter(todo => todo.complete);

  return (
    <>
      <h3>Active Todos</h3>
      <ul>
        {activeTodos.map(todo => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
      <h3>Completed Todos</h3>
      <ul>
        {completedTodos.map(todo => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </>
  );
};