"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function NotesPage() {
  const [form, setForm] = useState({ noteTaker: "", noteId: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const router = useRouter();

  const handleClick = () => {
    router.push(`/notes/${form.noteId}?notetaker=${form.noteTaker}`);
  };

  return (
    <main>
      <h1>Notes Page</h1>
      <label htmlFor="note-taker">Note Taker:</label>
      <input
        name="noteTaker"
        id="notes-taker"
        type="text"
        value={form.noteTaker}
        onChange={handleChange}
      ></input>

      <label htmlFor="note-id">Note ID:</label>
      <input
        name="noteId"
        id="note-id"
        type="text"
        value={form.noteId}
        onChange={handleChange}
      ></input>

      <button onClick={handleClick}>Go to note</button>
    </main>
  );
}

export default NotesPage;
