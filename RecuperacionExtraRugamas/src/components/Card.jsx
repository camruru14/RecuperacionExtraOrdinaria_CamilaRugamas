import React from 'react';
import './Card.css';
 
export const Card = ({ name, genres, premiered, ended, image, summary }) => {
  return (
    <div className="show-card">
      {image && <img src={image} alt={name} className="show-image" />}
      <div className="show-info">
        <h3>{name}</h3>
        <p className="show-genres"><strong>Géneros:</strong> {genres.join(', ')}</p>
        <p className="show-dates">
          <strong>Estreno:</strong> {premiered || 'N/A'} | <strong>Fin:</strong> {ended || 'En emision'}
        </p>
        <div 
          className="show-summary" 
          dangerouslySetInnerHTML={{ __html: summary || '<p>No disponible.</p>' }} 
        />
      </div>
    </div>
  );
};
 