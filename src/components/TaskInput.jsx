import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

export default function TaskInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;
    dispatch(addTask({ name, description }));
    setName("");
    setDescription("");
  };

  return (
    <div className="bg-[#D97B3A] rounded-2xl p-5 flex flex-col gap-3">
      <label className="text-white font-semibold text-sm">Task Name:</label>
      <input
        type="text"
        placeholder="Enter task name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-lg px-3 py-2 text-sm bg-white text-gray-800 outline-none"
      />
      <label className="text-white font-semibold text-sm">
        Description Name:
      </label>
      <input
        type="text"
        placeholder="Enter Description name..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="rounded-lg px-3 py-2 text-sm bg-white text-gray-800 outline-none"
      />
      <button
        onClick={handleAdd}
        className="bg-[#8B3A0F] hover:bg-[#6f2d09] text-white font-semibold rounded-lg py-2 text-sm"
      >
        Add Task
      </button>
    </div>
  );
}
