function Card({ title, description, imageUrl }) {
  return (
    <div className="flex flex-col items-center border-2 border-orange-300 w-96 mt-3 mb-3">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-orange-600">{description}</p>
      <img src={imageUrl} alt={`image of ${title}`} />
    </div>
  );
}

export default Card;
