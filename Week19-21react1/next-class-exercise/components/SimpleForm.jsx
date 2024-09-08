import { useState } from "react";

function SimpleForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data:", form);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-3 mb-3 border-2">
      <label htmlFor="name" className="ml-3">
        Name:
      </label>
      <input
        type="text"
        id="name"
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
        className="border-2 m-3"
      />

      <label htmlFor="email" className="ml-3">
        Email:
      </label>
      <input
        type="text"
        id="email"
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
        className="border-2 m-3"
      />

      <label htmlFor="message" className="ml-3">
        Message:
      </label>
      <input
        type="text"
        id="message"
        value={form.message}
        onChange={(event) => setForm({ ...form, message: event.target.value })}
        className="border-2 m-3"
      />
      <div className="flex justify-center mt-3">
        <button
          type="submit"
          className="w-14 bg-gray-400 justify-center items-center"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SimpleForm;
