import { useContext } from "react";
import { todoContext } from "./TodoProvider";

const TodoForm = () => {
  const context = useContext(todoContext);
  if (!context) {
    throw new Error("TodoForm must be used within a TodoProvider");
  }

  const { todoTitle } = context;

  console.log(todoTitle);

  return (
    <div>
      <h1>This is todo components</h1>
    </div>
  );
};

export default TodoForm;
