import "./App.css";
import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";

function App() {
  return (
    <>
      <h1 className=" text-gray-500 text-xl">Be Accountable and Manage your Work Load</h1>
      <hr className="mt-1 mb-6"/>
      <AddTodo/>
      <Todos/>
    </>
  );
}

export default App;
