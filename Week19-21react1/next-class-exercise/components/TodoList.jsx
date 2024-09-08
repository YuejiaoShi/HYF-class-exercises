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
  function handleDelete(todoTitle) {
    const newTodos = todos.filter((todo) => todo !== todoTitle);
    setTodos(newTodos);
  }

  return (
    <>
      <form onSubmit={handleAdd} className="mt-6">
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
      <ul className="mb-6">
        {todos.map((todo, index) => (
          <li key={index} className="list-disc">
            {todo}
            <button className="bg-green-300" onClick={() => handleDelete(todo)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
