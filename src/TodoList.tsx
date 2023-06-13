import React from "react";
import { Todo, ToggleComplete } from "./types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  activeTodos: Array<Todo>;
  completedTodos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  activeTodos,
  completedTodos,
  toggleComplete
}) => {
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