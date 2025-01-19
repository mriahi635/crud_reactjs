import React from "react";
import { Link } from "react-router-dom";

function PersonCard({ person, deletePerson }) {
  return (
    <div style={styles.card}>
      <h2>{person.name}</h2>
      <p>Âge: {person.age}</p>
      <p>Ville: {person.city}</p>
      <div style={styles.buttonGroup}>
        {/* Bouton Détails */}
        <Link to={`/details/${person.id}`}>
          <button style={styles.detailsButton}>Détails</button>
        </Link>
        {/* Bouton Modifier */}
        <Link to={`/update/${person.id}`}>
          <button style={styles.editButton}>Modifier</button>
        </Link>
        {/* Bouton Supprimer */}
        <button
          style={styles.deleteButton}
          onClick={() => deletePerson(person.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
  detailsButton: {
    padding: "8px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  editButton: {
    padding: "8px",
    backgroundColor: "#FFC107",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "8px",
    backgroundColor: "#DC3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default PersonCard;
