import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { AddTodo, Todo, ToggleComplete } from "./types";

const App: React.FC = () => {
  const [activeTodos, setActiveTodos] = useState<Array<Todo>>(initialTodos.filter(todo => !todo.complete));
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>(initialTodos.filter(todo => todo.complete));

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedActiveTodos = activeTodos.filter(todo => todo !== selectedTodo);
    const updatedCompletedTodos = completedTodos.filter(todo => todo !== selectedTodo);
    const updatedTodo = { ...selectedTodo, complete: !selectedTodo.complete };

    if (updatedTodo.complete) {
      setCompletedTodos([...completedTodos, updatedTodo]);
      setActiveTodos(updatedActiveTodos);
    } else {
      setActiveTodos([...activeTodos, updatedTodo]);
      setCompletedTodos(updatedCompletedTodos);
    }
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setActiveTodos([...activeTodos, { text: newTodo, complete: false }]);
  };

  const todos = [...activeTodos, ...completedTodos];

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;