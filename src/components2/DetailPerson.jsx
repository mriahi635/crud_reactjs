import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { initialPeople } from "./data";

function DetailPerson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    // Recherche de la personne pour afficher les détails
    const selectedPerson = initialPeople.find(
      (person) => person.id === parseInt(id)
    );
    if (selectedPerson) {
      setPerson(selectedPerson);
    } else {
      navigate("/"); // Redirection vers la page d'accueil si la personne n'est pas trouvée
    }
  }, [id, navigate]);

  if (!person) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="card">
      <h1>Détails de la personne</h1>
      <h3>{person.name}</h3>
      <p>Âge: {person.age}</p>
      <p>Ville: {person.city}</p>
      <button onClick={() => navigate("/")}>Retour</button>
    </div>
  );
}

export default DetailPerson;
