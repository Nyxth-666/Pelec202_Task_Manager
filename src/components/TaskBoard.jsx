import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

export default function TaskBoard() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);

  return (
    <div className="bg-[#D97B3A] rounded-2xl p-5 flex flex-col gap-3">
      <h2 className="text-white font-bold text-base">Task Board</h2>
      {tasks.length === 0 && (
        <p className="text-orange-100 text-sm italic">No tasks yet.</p>
      )}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#C86A28] rounded-xl px-4 py-3 flex items-center gap-3"
        >
          <div className="flex-1">
            <p className="text-sm font-bold text-white">{task.name}</p>
            <p className="text-xs text-orange-100">{task.description}</p>
          </div>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-white text-xs bg-white/20 hover:bg-red-400/40 px-2 py-1 rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
