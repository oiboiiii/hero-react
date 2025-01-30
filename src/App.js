import React from "react";
import ListGroup from "./components/Card"; // Импорт компонента

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Список супергероев"),
    React.createElement(ListGroup, null) // Используем компонент
  );
}

export default App;