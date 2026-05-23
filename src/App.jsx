import TaskInput from "./components/TaskInput";
import TaskBoard from "./components/TaskBoard";
import Luffy from "./assets/luffy.png";
import Nami from "./assets/nami.png";
import Robin from "./assets/robin.png";
import Sanji from "./assets/sanji.png";
import Usopp from "./assets/usopp.png";
import Zoro from "./assets/zoro.png";

export default function App() {
  const characters = [
    { id: 1, url: Luffy },
    { id: 2, url: Nami },
    { id: 3, url: Robin },
    { id: 4, url: Sanji },
    { id: 5, url: Usopp },
    { id: 6, url: Zoro },
  ];

  return (
    <div className="min-h-screen bg-[#F4A96A] flex flex-col">
      <div className="max-w-3xl w-full mx-auto px-4 pt-8">
        <h1 className="text-3xl font-bold text-center text-black-800">
          Task Manager
        </h1>
        <p className="text-center text-black-400 text-sm mb-8">
          Joshua Barotea - BSIT - 2A
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TaskInput />
          <TaskBoard />
        </div>
      </div>

      <div className="mt-auto flex justify-between items-end px-4 pt-8">
        <div className="flex items-end gap-4">
          {characters.slice(0, 3).map((char) => (
            <img
              key={char.id}
              src={char.url}
              alt={`Character ${char.id}`}
              className="w-30 h-30 object-cover"
            />
          ))}
        </div>

        <div className="flex items-end gap-4">
          {characters.slice(3, 6).map((char) => (
            <img
              key={char.id}
              src={char.url}
              alt={`Character ${char.id}`}
              className="w-30 h-30 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
