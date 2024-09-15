function FormPage() {
  return (
    <form>
      <h1>Take a Note</h1>
      <label>Note Title: </label>
      <input type="text" name="title" id="title" />
      <br className="formbr" />
      <label>Note Content: </label>
      <textarea type="text" name="content" id="content" rows={10} cols={50} />
      <br className="formbr" />
      <label>Note Author: </label>
      <input type="text" name="author" id="author" />
      <br className="formbr" />
      <label htmlFor="date">Note Date: </label>
      <input type="date" name="date" id="date" />
      <br className="formbr" />
      <button type="submit">Submit Note</button>
    </form>
  );
}

export default FormPage;
