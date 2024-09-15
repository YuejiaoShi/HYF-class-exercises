
function RoverPhoto({ src, date, roverName }) {
  return (
    <div>
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
      <img src={src} alt={`Photo taken by Rover ${roverName} on ${date}`} />
    </div>
  );
}

export default RoverPhoto;
