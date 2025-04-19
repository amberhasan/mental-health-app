import "../styles/Store.css"; // <-- THIS LINE calls it
function Store({ goBack }) {
  return (
    <div className="fullscreenContainer">
      <h1>Store</h1>
      <button className="backButton" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Store;
