import { useState } from "react";
("ignore todos");

function TodoList() {
  const [todos, setTodos] = useState(["todo1", "todo2"]);

  function handleAdd(e) {
    e.preventDefault();
    setTodos([...todos, e.target.value]);
  }
  function handleDelete() {
    setTodos(todos.slice(0, -1));
  }

  return (
    <>
      <form>
        <input
          type="text"
          className="border-2"
          placeholder="Add your new Todo..."
        />
        <button onSubmit={handleAdd}>Add todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="list-disc">
            {todo}
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete todo</button>
    </>
  );
}

export default TodoList;
