import { useState } from "react";
("ignore todos");

function TodoList() {
  const [todos, setTodos] = useState(["todo1", "todo2"]);
  const [newTodo, setNewTodo] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
  function handleDelete() {
    setTodos(todos.slice(0, -1));
  }

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          className="border-2"
          placeholder="Add your new Todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" className="bg-rose-300">
          Add todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="list-disc">
            {todo}
          </li>
        ))}
      </ul>
      <button className="bg-rose-300" onClick={handleDelete}>
        Delete todo
      </button>
    </>
  );
}

export default TodoList;
