import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchShows } from '../hooks/useFetch.js';
import { Card } from '../components/Card.jsx';
import { Loader } from '../components/Loader.jsx';
import './Shows.css';
 
export const Shows = () => {
  const { shows, loading, error } = useFetchShows();
  const navigate = useNavigate();
 
  return (
    <div className="shows-container">
      <header className="shows-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Volver a Inicio
        </button>
        <h2>Catálogo de Shows (TVMaze API)</h2>
      </header>
 
      {loading && <Loader />}
      {error && <p className="error-message">Error: {error}</p>}
 
      <div className="shows-grid">
        {!loading && !error && shows.map((show) => (
          <Card
            key={show.id}
            name={show.name}
            genres={show.genres}
            premiered={show.premiered}
            ended={show.ended}
            image={show.image?.medium}
            summary={show.summary}
          />
        ))}
      </div>
    </div>
  );
};
