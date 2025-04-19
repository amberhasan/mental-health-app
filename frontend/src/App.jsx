import { useState, useEffect } from "react";
import "./App.css";
import Games from "./pages/Games";
import TodoList from "./pages/TodoList";
import EmotionScan from "./pages/EmotionScan";
import Journal from "./pages/Journal";
import Store from "./pages/Store";
import Options from "./pages/Options";

function App() {
  const [screen, setScreen] = useState("home");
  const [quote, setQuote] = useState("");

  const quotes = [
    "Believe you can and you're halfway there.",
    "You are stronger than you think.",
    "Small steps every day.",
    "Progress, not perfection.",
    "Your feelings are valid.",
    "Keep going.",
  ];

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  if (screen === "home") {
    return (
      <div className="fullscreenContainer">
        <h1>Hello John</h1>
        <p className="quote">{quote}</p>
        <div className="grid">
          <MenuButton label="Games" onClick={() => setScreen("games")} />
          <MenuButton label="TODO List" onClick={() => setScreen("todo")} />
          <MenuButton
            label="Emotion Scan"
            onClick={() => setScreen("emotion")}
          />
          <MenuButton label="Journal" onClick={() => setScreen("journal")} />
          <MenuButton label="Store" onClick={() => setScreen("store")} />
          <MenuButton label="Options" onClick={() => setScreen("options")} />
        </div>
      </div>
    );
  }

  if (screen === "games") return <Games goBack={() => setScreen("home")} />;
  if (screen === "todo") return <TodoList goBack={() => setScreen("home")} />;
  if (screen === "emotion")
    return <EmotionScan goBack={() => setScreen("home")} />;
  if (screen === "journal") return <Journal goBack={() => setScreen("home")} />;
  if (screen === "store") return <Store goBack={() => setScreen("home")} />;
  if (screen === "options") return <Options goBack={() => setScreen("home")} />;

  return null;
}

function MenuButton({ label, onClick }) {
  return (
    <button className="menuButton" onClick={onClick}>
      {label}
    </button>
  );
}

export default App;
