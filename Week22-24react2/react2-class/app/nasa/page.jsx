"use client";

import React, { useState, useEffect } from "react";
import RoverPhoto from "./RoverPhoto";
import AstronomyPic from "./AstronomyPic";
const API_KEY = "ZtE8w05IDI2fmDwheB4qtbOGHlV33Ob3cgK1TbMM";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [roverPhoto, setRoverPhoto] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto);
        if (!roverPhotoResponse.ok)
          throw new Error("Error fetching rover photos");
        const roverPhotoData = await roverPhotoResponse.json();
        setRoverPhoto(roverPhotoData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRoverPhotos();
  }, []);

  useEffect(() => {
    console.log(roverPhoto);
  }, [roverPhoto]);

  return (
    <div>
      <main>
        <h1>Collaboration with NASA</h1>
        <AstronomyPic />
        <section>
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
