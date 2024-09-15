"use client";

import { useRef } from "react";

function FormPage() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const authorRef = useRef(null);
  const dateRef = useRef(null);

  const clickTitle = () => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  };

  return (
    <form>
      <h1>Take a Note</h1>
      <label htmlFor="title">Note Title: </label>
      <input ref={titleRef} type="text" name="title" id="title" />
      <br className="formbr" />
      <label htmlFor="content">Note Content: </label>
      <textarea
        ref={contentRef}
        type="text"
        name="content"
        id="content"
        rows={10}
        cols={50}
      />
      <br className="formbr" />
      <label htmlFor="author">Note Author: </label>
      <input ref={authorRef} x type="text" name="author" id="author" />
      <br className="formbr" />
      <label htmlFor="date">Note Date: </label>
      <input ref={dateRef} type="date" name="date" id="date" />
      <br className="formbr" />
      <button type="submit">Submit Note</button>
    </form>
  );
}

export default FormPage;
