import { useState, useEffect } from 'react';
 
export const useFetchShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchShowsData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        if (!response.ok) {
          throw new Error('Error al conectar con la API');
        }
        const data = await response.json();
        setShows(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchShowsData();
  }, []);
 
  return { shows, loading, error };
};  