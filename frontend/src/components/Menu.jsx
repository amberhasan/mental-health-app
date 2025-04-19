import { Link } from "react-router-dom";
import { Card } from "../components/ui/card";

const menuItems = [
  { name: "Memory Game", path: "/games/memory" },
  { name: "Sudoku", path: "/games/sudoku" },
  { name: "KenKen", path: "/games/kenken" },
  { name: "Wordle", path: "/games/wordle" },
  { name: "To-Do List", path: "/todo" },
  { name: "Emotion Scan", path: "/emotion-scan" },
  { name: "Journal", path: "/journal" },
];

export default function Menu() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Main Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.name}>
           <div className="p-6 text-center bg-white rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer">
  <h2 className="text-xl font-semibold">{item.name}</h2>
</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
