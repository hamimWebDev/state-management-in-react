import { FormEvent, useContext, useState } from "react";
import { todoContext } from "./TodoProvider";

const TodoForm = () => {
  const context = useContext(todoContext);
  if (!context) {
    throw new Error("TodoForm must be used within a TodoProvider");
  }

  const { state, dispatch } = context;

  const [task, setTask] = useState("");

  function generateRandomObjectId(length: number = 24): string {
    const chars = "abcdef0123456789";
    let objectId = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      objectId += chars[randomIndex];
    }

    return objectId;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomId = generateRandomObjectId();
    const todo = {
      id: randomId,
      title: task,
      isComplete: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div>
      <h1>add todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          className="border border-red-500"
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          name="todo"
          id="todo"
        />
        <button className="bg-blue-500 p-1 rounded-lg m-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
