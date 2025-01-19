// src/components/PersonDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PersonDetail() {
  const { id } = useParams(); // Récupérer l'id depuis l'URL
  const person = useSelector((state) =>
    state.people.people.find((person) => person.id === parseInt(id))
  ); // Chercher la personne par son ID dans le store

  if (!person) {
    return <div>Personne introuvable</div>;
  }

  return (
    <div>
      <h1>Détails de la personne</h1>
      <p><strong>Nom:</strong> {person.name}</p>
      <p><strong>Âge:</strong> {person.age} ans</p>
      <p><strong>Ville:</strong> {person.city}</p>
    </div>
  );
}

export default PersonDetail;
