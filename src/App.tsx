import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { AddTodo, Todo, ToggleComplete } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  const activeTodos = todos.filter(todo => !todo.complete);
  const completedTodos = todos.filter(todo => todo.complete);

  return (
    <React.Fragment>
      <TodoList activeTodos={activeTodos} completedTodos={completedTodos} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;