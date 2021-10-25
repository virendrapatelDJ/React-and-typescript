import { useRef } from "react";
import { FormEvent } from "react";

const NewTodo = () => {
  const textRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(textRef.current?.value);
  };

  return (
    <form onSubmit={submitForm} className="shadow p-3 m-4 rounded">
      <h1>Create New Todo</h1>
      <div className="form-group">
        <label htmlFor="text">Todo text </label>
        <input
          ref={textRef}
          className="form-control"
          type="text"
          name="text"
          id="text"
        />
      </div>
      <br />
      <button className="btn btn-success" type="submit">
        Create Todo
      </button>
    </form>
  );
};

export default NewTodo;
