import { useState } from "react";

function Todo({ title }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      {isCompleted ? <h3 className="completed">{title}</h3> : <h3>{title}</h3>}
      <button onClick={() => toggleComplete()}>Complete</button>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
