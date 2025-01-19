// src/components/PersonCard.js
import React from "react";
import { Link } from "react-router-dom";

function PersonCard({ person, onDelete }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>{person.age} ans</p>
      <p>{person.city}</p>
      
      <Link to={`/details/${person.id}`}><button>Details</button></Link>
      <Link to={`/update/${person.id}`}><button>Modifier</button></Link>
      <button onClick={onDelete}>Supprimer</button>
    </div>
  );
}

export default PersonCard;
