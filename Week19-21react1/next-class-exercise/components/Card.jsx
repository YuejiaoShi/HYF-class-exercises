function Card({ title, description, imageUrl }) {
  return (
    <div>
      <h2 className="text-lg">{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt={`image of ${title}`} />
    </div>
  );
}

export default Card;
