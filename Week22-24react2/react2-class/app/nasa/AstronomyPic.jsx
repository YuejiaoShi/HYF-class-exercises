const API_KEY = "ZtE8w05IDI2fmDwheB4qtbOGHlV33Ob3cgK1TbMM";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export async function getServerSideProps() {
  try {
    const response = await fetch(NASA_URLs.astronomyPicOfTheDay);
    if (!response.ok) {
      throw new Error("Error fetching astronomy picture");
    }
    const data = await response.json();
    console.log(data);
    return { props: { dailyImg: data } };
  } catch (error) {
    return { props: { error: error.message } };
  }
}

function AstronomyPic({ dailyImg, error }) {
  if (error) return <p>Error: {error}</p>;
  console.log(dailyImg);
  console.log(error);

  return (
    <section>
      <h2>Astronomy Picture of the day</h2>

      <div>
        <figure>
          <img src={dailyImg.url} alt={dailyImg.title} />
          <figcaption>{dailyImg.title}</figcaption>
        </figure>
        <p>{dailyImg.explanation}</p>
      </div>
    </section>
  );
}

export default AstronomyPic;
