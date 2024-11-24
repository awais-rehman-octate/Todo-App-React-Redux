import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 px-10 py-10 mt-10 rounded">
      <h2 className="text-gray-500 text-2xl font-bold ">My All Todos</h2>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center text-white bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {todo.text}
            <button
              className="text-white bg-red-500 py-1 px-4 border-0 hover:bg-red-600"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </ div>
  );
};

export default Todos;
