import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: false },
    { id: 3, title: "todo 3", completed: false },
  ]);
  const [openForm, setOpenForm] = useState(false);

  const addTodo = () => {};

  return (
    <div className="w-[90%] mx-auto">
      {openForm && (
        <div className="flex w-[100%] justify-center my-3">
          <input
            className="input input-bordered input-primary w-full max-w-xs bg-white text-black"
            type="text"
            id="newTodo"
          />
          <button
            className="btn btn-success text-white"
            onClick={() => addTodo()}
          >
            Save Todo
          </button>
        </div>
      )}
      <h1 className="text-center text-white text-3xl my-3">Todo App</h1>
      <div className="grid grid-cols-3 gap-4">
        {todoList.map((todo) => {
          return <Todo key={todo.id} title={todo.title} />;
        })}
      </div>
      <div className="flex justify-center w-[100%] mt-10">
        <button
          className="btn btn-primary"
          onClick={() => setOpenForm(!openForm)}
        >
          {openForm ? "Close Form" : "Create Todo"}
        </button>
      </div>
    </div>
  );
}

export default App;
