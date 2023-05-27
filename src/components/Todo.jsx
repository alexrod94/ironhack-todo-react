import { useState } from "react";

function Todo({ title }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="card bg-white p-4 flex flex-col items-center">
      {isCompleted ? (
        <h3 className="completed text-black font-semibold">{title}</h3>
      ) : (
        <h3 className="text-black font-semibold">{title}</h3>
      )}
      <div className="flex justify-center mt-3">
        <button
          className="btn btn-xs mr-2 btn-success text-white"
          onClick={() => toggleComplete()}
        >
          Complete
        </button>
        <button className="btn btn-xs ml-2 btn-error text-white">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
