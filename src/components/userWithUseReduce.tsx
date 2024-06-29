import { ChangeEvent, useReducer } from "react";
type TAction = {
  type: string;
  payload: string;
};
const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHoodies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      return currentState;
  }
};

const UserInfoWithReduceState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border border-purple-300 m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        className="border border-purple-300 m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        onBlur={(e) =>
          dispatch({ type: "addHoodies", payload: e.target.value })
        }
        className="border border-purple-300 m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobby"
      />
      <button className="bg-blue-500 p-1 rounded-lg text-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserInfoWithReduceState;
