function Button({ text, onClick }) {
  return (
    <button className="bg-slate-500" onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
