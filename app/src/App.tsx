import React from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  const todos = ["Learn React", "Learn Angular", "Learn Java"];
  return (
    <div>
      <h1>Todo App</h1>
      <hr></hr>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
