import { useState } from "react";

function Journal({ goBack }) {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("");
  const [confidence, setConfidence] = useState(null);

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

  //   const handleAnalyze = async () => {
  //     console.log("Button clicked! Entry is:", entry);
  //   };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Journal</h1>

      <textarea
        className="border rounded p-4 w-96 h-48 mb-4"
        placeholder="Write your journal entry here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mb-4"
        onClick={() => {
          console.log("Button clicked inline! Entry is:", entry);
          handleAnalyze();
        }}
      >
        Analyze Mood
      </button>

      {mood && (
        <div>
          <p className="text-lg font-bold">Mood: {mood}</p>
          <p className="text-sm">
            Confidence: {(confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}

      <button className="backButton mt-8" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Journal;
