import TodoForm from "./context/TodoForm";
import TodoList from "./context/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="">
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  );
}

export default App;

// tsc
