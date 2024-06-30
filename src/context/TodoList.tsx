import { useContext } from "react";
import { todoContext } from "./TodoProvider";

type TTodo = {
  id: string;
  title: string;
  isComplete: boolean;
};

const TodoList = () => {
  const { state, dispatch } = useContext(todoContext);
  return (
    <div>
      {state.map((item: TTodo) => (
        <p
          className={`cursor-pointer ${
            item.isComplete === true ? "line-through" : ""
          }`}
          onClick={() =>
            dispatch({
              type: "taskComplete",
              payload: item.id,
            })
          }
          key={item.id}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
