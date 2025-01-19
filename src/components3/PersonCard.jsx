import React from "react";
import { Link } from "react-router-dom";

const PersonCard = ({ person, onEdit, onDelete, onDetaille }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
      <Link to={`/edit/${person.id}`}>
        <button onClick={() => onEdit(person)}>Edit</button>
      </Link>
      <Link to={`/details/${person.id}`}>
        <button onClick={() => onDetaille(person.id)}>Detaille</button>
      </Link>
      <button onClick={() => onDelete(person.id)}>Delete</button>
    </div>
  );
};

export default PersonCard;
