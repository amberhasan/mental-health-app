import "../styles/Games.css"; // <-- THIS LINE calls it

function Games({ goBack }) {
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Games</h1>
      <button className="backButton" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Games;
