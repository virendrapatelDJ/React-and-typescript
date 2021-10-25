import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn Angular"),
    new Todo("Learn Typescript"),
  ];
  return (
    <div className="container">
      <NewTodo />
      <hr />
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
