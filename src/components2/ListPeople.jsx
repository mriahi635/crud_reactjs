import React from "react";
import { Link } from "react-router-dom";
import PersonCard from "./PersonCard";

function ListPeople({ people, deletePerson }) {
  return (
    <div>
      <h1>Liste des personnes</h1>
       <Link to={`/add`}>
                <button style={styles.addButton}>Add</button>
        </Link>
      <div style={styles.cardContainer}>
        {people.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            deletePerson={deletePerson}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    padding: "16px",
  },
  addButton: {
    padding: "8px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }
};

export default ListPeople;
