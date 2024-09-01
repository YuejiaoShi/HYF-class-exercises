function Person() {
  const name = "Yuejiao";
  const age = 25;
  if (age < 18) return <p>{name} is a minor.</p>;
  return <p>{name} is an adult.</p>;
}

export default Person;
