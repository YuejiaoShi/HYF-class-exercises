function NotesPage() {
  return (
    <main>
      <h1>Notes Page</h1>
      <label htmlFor="note-taker">Note Taker:</label>
      <input id="note-taker" name="notes-taker" type="text"></input>

      <label htmlFor="note-id">Note ID:</label>
      <input id="note-id" name="note-id" type="text"></input>
    </main>
  );
}

export default NotesPage;
