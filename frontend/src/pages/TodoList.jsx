import "../styles/TodoList.css"; // <-- THIS LINE calls it
function TodoList({ goBack }) {
  return (
    <div className="fullscreenContainer">
      <h1>TodoList</h1>
      <button className="backButton" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default TodoList;
