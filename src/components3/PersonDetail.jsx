import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams(); // Récupérer l'ID de l'URL
  const people = useSelector((state) => state); // Récupérer l'état des personnes depuis Redux

  // Rechercher la personne avec l'ID correspondant
  const person = people.find((p) => p.id === parseInt(id));

  if (!person) {
    return <div>Person not found</div>; // Si la personne n'est pas trouvée, afficher un message
  }

  return (
    <div>
      <h2>Person Details</h2>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>City:</strong> {person.city}</p>
    </div>
  );
};

export default PersonDetail;
