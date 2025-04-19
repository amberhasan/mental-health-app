import { useState } from "react";
import "../styles/Journal.css"; // ✅ Keep this!

function Journal({ goBack }) {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("");
  const [confidence, setConfidence] = useState(null);

  const getMoodEmoji = (mood) => {
    if (mood === "POSITIVE") return "😊";
    if (mood === "NEGATIVE") return "😞";
    return "😐"; // neutral or unknown
  };

  const handleAnalyze = async () => {
    console.log("Analyzing mood for entry:", entry);
    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: entry }),
      });

      const data = await response.json();
      setMood(data.mood);
      setConfidence(data.confidence);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
  };

  return (
    <div className="pageContainer">
      <div className="journalCard">
        <h1 className="pageTitle">Journal</h1>

        <textarea
          className="journalTextarea"
          placeholder="Write your journal entry here..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />

        <button className="analyzeButton" onClick={handleAnalyze}>
          Analyze Mood
        </button>

        {mood && (
          <div className="moodResult">
            <div className="emoji">{getMoodEmoji(mood)}</div>
            <p className="moodText">Mood: {mood}</p>
            <p className="confidenceText">
              Confidence: {(confidence * 100).toFixed(2)}%
            </p>
          </div>
        )}

        <button className="backButton" onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Journal;
