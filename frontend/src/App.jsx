import { useState, useEffect } from "react";

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
      <div style={styles.fullscreenContainer}>
        <h1>Hello John</h1>
        <p style={styles.quote}>{quote}</p>
        <div style={styles.grid}>
          <button style={styles.button} onClick={() => setScreen("games")}>
            Games
          </button>
          <button style={styles.button} onClick={() => setScreen("todo")}>
            TODO List
          </button>
          <button style={styles.button} onClick={() => setScreen("emotion")}>
            Emotion Scan
          </button>
          <button style={styles.button} onClick={() => setScreen("journal")}>
            Journal
          </button>
          <button style={styles.button} onClick={() => setScreen("store")}>
            Store
          </button>
          <button style={styles.button} onClick={() => setScreen("options")}>
            Options
          </button>
        </div>
      </div>
    );
  }

  if (screen === "games")
    return <Screen title="Games" goBack={() => setScreen("home")} />;
  if (screen === "todo")
    return <Screen title="TODO List" goBack={() => setScreen("home")} />;
  if (screen === "emotion")
    return <Screen title="Emotion Scan" goBack={() => setScreen("home")} />;
  if (screen === "journal")
    return <Screen title="Journal" goBack={() => setScreen("home")} />;
  if (screen === "store")
    return <Screen title="Store" goBack={() => setScreen("home")} />;
  if (screen === "options")
    return <Screen title="Options" goBack={() => setScreen("home")} />;

  return null;
}

function Screen({ title, goBack }) {
  return (
    <div style={styles.fullscreenContainer}>
      <h1>{title}</h1>
      <button style={styles.backButton} onClick={goBack}>
        Back
      </button>
    </div>
  );
}

const styles = {
  fullscreenContainer: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  quote: {
    fontStyle: "italic",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    transition: "background-color 0.3s",
    width: "150px",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "16px",
    marginTop: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
  },
};

export default App;
