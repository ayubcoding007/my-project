import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    if (input.trim().length <= 0) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
      icon: false,
    };
    setData([...data, newTask]);
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false,
        icon: false,
      };
      setData([...data, newTask]);
      setInput("");
    }
  };

  const toggleComplete = (id) => {
    const updatedData = data.map((item) =>
      item.id === id  
        ? { ...item, completed: !item.completed, icon: !item.icon }
        : item
    );
    
    setData(updatedData)
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold text-3xl">Todo App</h1>
      <div className="mt-4 p-10 w-62 shadow-xl">
        <div>
          <input
            onKeyUp={handleKey}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-5 outline-none border-none bg-cyan-100 rounded-md font-medium text-lg"
            type="text"
            placeholder="Add Task"
          />
          <span>
            <button onClick={handleClick} className="p-5 rounded-md bg-red-400">
              Add
            </button>
          </span>
        </div>
        <hr className="mt-2 bg-red-300 w-full h-[2px]" />

        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="border-2 flex justify-between bg-sky-400 text-white rounded-md items-center p-2 mt-5 mb-2"
            >
              <li
                className={`mt-2 mb-2 list-none ${
                  item.completed ? "line-through" : ""
                }`}
              >
                {item.text}
              </li>
              <span onClick={() => toggleComplete(item.id)}>
                {item.icon ? <MdDelete /> : <MdDeleteForever />}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
