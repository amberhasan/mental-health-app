import "../styles/Journal.css"; // <-- THIS LINE calls it
function Journal({ goBack }) {
  return (
    <div className="fullscreenContainer">
      <h1>Journal</h1>
      <button className="backButton" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Journal;
