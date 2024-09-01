import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["item1", "item2"]);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
