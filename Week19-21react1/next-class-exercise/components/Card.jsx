function Card({ title, description, imageUrl }) {
  return (
    <div>      <h2 className="text-2xl">{title}</h2>
      <p className="text-orange-600">{description}</p>
      <img src={imageUrl} alt={`image of ${title}`} />
    </div>
  );
}

export default Card;
