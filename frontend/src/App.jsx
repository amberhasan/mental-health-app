import { useState } from "react";

function App() {
  const [userText, setUserText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState(null);

  const handleDetect = async () => {
    const response = await fetch("http://localhost:5000/detect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: userText }),
    });
    const data = await response.json();
    setDetectedLanguage(data.language);
  };

  return (
    <div>
      <h1>Mental Health Language Detector</h1>
      <textarea
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        placeholder="Type something here..."
      />
      <br />
      <button onClick={handleDetect}>Detect Language</button>
      {detectedLanguage && <h2>Detected: {detectedLanguage}</h2>}
    </div>
  );
}

export default App;
