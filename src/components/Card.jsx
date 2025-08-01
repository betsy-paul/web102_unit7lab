import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, name, style, accessories, team }) => {
  return (
    <div className="Card">
      <Link to={`/character/${id}`}>
        <h3>{name}</h3>
        <p>Style: {style}</p>
        <p>Accessories: {accessories}</p>
        <p>Team: {team}</p>
      </Link>

      {/* Edit button outside the main link */}
      <Link to={`/character/${id}/edit`}>
        <button className="editBtn">Edit</button>
      </Link>
    </div>
  );
};

export default Card;