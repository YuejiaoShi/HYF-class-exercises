function Child({ bgColor, handleChange }) {
  return (
    <>
      <button onClick={handleChange} className="bg-stone-300">
        Change Color 👇
      </button>
      <p className={bgColor}>Some Context</p>
    </>
  );
}

export default Child;
