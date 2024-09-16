"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function BlogPage() {
  const [EPICImages, setEPICImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEPICImages = async () => {
      try {
        const EPICImages = await fetch(
          "https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY"
        );
        if (!EPICImages.ok) throw new Error("Error fetching rover photos");
        const EPICImagesData = await EPICImages.json();
        setEPICImages(EPICImagesData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEPICImages();
  }, []);
  const pathname = usePathname();
  return (
    <>
      <p>Current pathname: {pathname}</p>;
      <p>
        {EPICImages.map((image) => (
          <img src={image.url} alt={image.identifier} />
        ))}
      </p>
    </>
  );
}

export default BlogPage;
