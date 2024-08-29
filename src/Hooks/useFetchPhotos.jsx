import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPhotos = (albumId) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const base_URI = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (!albumId) {
      console.log("null id");
      return;
    }
    const getPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${base_URI}/albums/${albumId}/photos`
          //   "https://jsonplaceholder.typicode.com/albums/{}/photos"
        );
        setPhotos(response.data);
      } catch (err) {
        console.log("Failed to fetch photos:", err);
      }
      setLoading(false);
    };
    getPhotos();
  }, [albumId]);

  return { photos, loading };
};

export default useFetchPhotos;
