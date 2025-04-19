import React, { useState, useEffect } from 'react';
import Card from './components/Card.jsx';
import './components/Card.css';
import Games from "./pages/Games";
import TodoList from "./pages/TodoList";
import EmotionScan from "./pages/EmotionScan";
import Journal from "./pages/Journal";
import Store from "./pages/Store";
import Options from "./pages/Options";

const cardData = [
  {
    icon: '🎮',
    title: 'Mindful Games',
    description: 'Practice mindfulness through engaging games',
    screen: 'games'
  },
  {
    icon: '🛍️',
    title: 'Wellness Store',
    description: 'Discover tools for your mental wellbeing',
    screen: 'store'
  },
  {
    icon: '✅',
    title: 'Self-Care Tasks',
    description: 'Track your daily wellness activities',
    screen: 'todo'
  },
  {
    icon: '🧠',
    title: 'Mood Scanner',
    description: 'Check in with your emotional state',
    screen: 'emotion'
  },
  {
    icon: '📖',
    title: 'Reflection Journal',
    description: 'Document your thoughts and feelings',
    screen: 'journal'
  },
  {
    icon: '⚙️',
    title: 'Your Settings',
    description: 'Personalize your wellness journey',
    screen: 'options'
  },
];

const quotes = [
  "Believe you can and you're halfway there.",
  "You are stronger than you think.",
  "Small steps every day.",
  "Progress, not perfection.",
  "Your feelings are valid.",
  "Keep going.",
  "Simplicity is the ultimate sophistication.",
  "Be yourself; everyone else is already taken.",
  "It always seems impossible until it's done.",
  "What we think, we become.",
  "Life is a long lesson in humility."
];

function App() {
  const [screen, setScreen] = useState("home");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  if (screen === "home") {
    return (
      <div className="fullscreenContainer">
<<<<<<< HEAD
        <h1>"MindFrame" A Glanceable Mental Health Dashboard</h1>
=======
        <h1>"MindFrame" – A Glanceable Mental Health Dashboard</h1>
>>>>>>> a36b91b (Journal better UI)
        <p className="quote">{quote}</p>
        <div className="card-grid">
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onClick={() => setScreen(card.screen)}
            />
          ))}
        </div>
      </div>
    );
  }

  if (screen === "games") return <Games goBack={() => setScreen("home")} />;
  if (screen === "todo") return <TodoList goBack={() => setScreen("home")} />;
  if (screen === "emotion") return <EmotionScan goBack={() => setScreen("home")} />;
  if (screen === "journal") return <Journal goBack={() => setScreen("home")} />;
  if (screen === "store") return <Store goBack={() => setScreen("home")} />;
  if (screen === "options") return <Options goBack={() => setScreen("home")} />;

  return null;
}

export default App;