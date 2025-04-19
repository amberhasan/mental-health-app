// /pages/EmotionScan.jsx
function EmotionScan({ goBack }) {
  return (
    <div className="fullscreenContainer">
      <h1>EmotionScan</h1>
      <button className="backButton" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default EmotionScan;
