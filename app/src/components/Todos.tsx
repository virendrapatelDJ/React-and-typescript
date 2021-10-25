import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ todos: Todo[] }> = (props) => {
  const { todos } = props;

  return (
    <div className="shadow p-3 m-4 rounded">
      <h1>Todo List</h1>
      <hr />

      <table className="table table-bordered">
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
