import TodoForm from "./context/TodoForm";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="">
        <TodoForm></TodoForm>
      </div>
    </TodoProvider>
  );
}

export default App;

// tsc
