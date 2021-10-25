import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    new Todo("Learn React"),
    new Todo("Learn Angular"),
    new Todo("Learn Typescript"),
  ]);

  function handleAddTodo(text: string) {
    setTodos([...todos, new Todo(text)]);
  }
  return (
    <div className="container">
      <NewTodo onAddTodo={handleAddTodo} />
      <hr />
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
