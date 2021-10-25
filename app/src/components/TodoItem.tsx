import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  const { todo } = props;
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.text}</td>
    </tr>
  );
};

export default TodoItem;
