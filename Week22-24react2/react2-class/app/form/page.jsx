"use client";

import { useRef } from "react";

function FormPage() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const authorRef = useRef(null);
  const dateRef = useRef(null);

  const refs = {
    title: titleRef,
    content: contentRef,
    author: authorRef,
    date: dateRef,
  };

  const clickTitle = () => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {};
    for (let key in refs) {
      formData[key] = refs[key].current.value;
    }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Take a Note</h1>
      <label onClick={clickTitle} htmlFor="title">
        Note Title:
      </label>
      <input ref={titleRef} type="text" name="title" id="title" required />
      <br className="formbr" />
      <label htmlFor="content">Note Content: </label>
      <textarea
        ref={contentRef}
        type="text"
        name="content"
        id="content"
        rows={10}
        cols={50}
        required
      />
      <br className="formbr" />
      <label htmlFor="author">Note Author: </label>
      <input ref={authorRef} type="text" name="author" id="author" required />
      <br className="formbr" />
      <label htmlFor="date">Note Date: </label>
      <input ref={dateRef} type="date" name="date" id="date" required />
      <br className="formbr" />
      <button type="submit">Submit Note</button>
    </form>
  );
}

export default FormPage;
