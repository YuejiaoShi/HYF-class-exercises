import { useState } from "react";

function NotesPage() {
  const [form, setForm] = useState({ noteTaker: "", noteId: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <main>
      <h1>Notes Page</h1>
      <label htmlFor="note-taker">Note Taker:</label>
      <input
        name="noteTaker"
        id="notes-taker"
        type="text"
        onChange={handleChange}
      ></input>

      <label htmlFor="note-id">Note ID:</label>
      <input
        name="noteId"
        id="note-id"
        type="text"
        onChange={handleChange}
      ></input>

      <button type="submit">Go to note</button>
    </main>
  );
}

export default NotesPage;
