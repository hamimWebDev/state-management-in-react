import { ReactNode, createContext, useReducer } from "react";

// Define the context type
type TTodoContext = {
  state: TTodo[];
  dispatch: React.Dispatch<TAction>;
};

// Initialize the context with a default value
export const todoContext = createContext<TTodoContext | undefined>(undefined);

type TTodoProviderProps = {
  children: ReactNode;
};

type TTodo = {
  id: string;
  title: string;
  isComplete: boolean;
};

type TAction = {
  type: string;
  payload: TTodo;
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TTodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    state,
    dispatch,
  };

  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default TodoProvider;
