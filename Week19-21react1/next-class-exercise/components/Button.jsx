function Button({ text, onClick }) {
  return (
    <button className="bg-lime-600" onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
