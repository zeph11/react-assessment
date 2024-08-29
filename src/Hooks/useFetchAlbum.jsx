import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAlbum = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const base_URI = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getAlbum = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`${base_URI}/albums`);
        setData(response);
        setStatus(response.status);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getAlbum();
  }, []);

  // console.log(status);
  return { data, loading };
};

export default useFetchAlbum;
