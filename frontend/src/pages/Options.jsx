import "../styles/Options.css"; // <-- THIS LINE calls it
function Options({ goBack }) {
  return (
    <div className="fullscreenContainer">
      <h1>Options</h1>
      <button className="backButton" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Options;
