import React from "react";

const Todos: React.FC<{ todos: string[] }> = (props) => {
  const { todos } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};

export default Todos;
