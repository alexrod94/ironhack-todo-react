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
    <div>
      <h1>Todo App</h1>
      {todoList.map((todo) => {
        return <Todo key={todo.id} title={todo.title} />;
      })}
      <button onClick={() => setOpenForm(!openForm)}>Create a new todo</button>
      {openForm && (
        <div>
          <input type="text" id="newTodo" />
          <button onClick={() => addTodo()}>Save Todo</button>
        </div>
      )}
    </div>
  );
}

export default App;
