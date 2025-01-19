import React from "react";
import { useParams, Link } from "react-router-dom";

function PersonDetail({ people }) {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const person = people.find((p) => p.id === parseInt(id, 10)); // Trouve la personne correspondante

  if (!person) {
    return <p>Personne introuvable</p>;
  }

  return (
    <div style={styles.container}>
      <h1>Détails de {person.name}</h1>
      <p>Âge: {person.age}</p>
      <p>Ville: {person.city}</p>
      <Link to="/">
        <button style={styles.button}>Retour à la liste</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "16px",
    textAlign: "center",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default PersonDetail;
