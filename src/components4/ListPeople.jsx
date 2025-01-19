// src/components/ListPeople.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePerson } from "../features/peopleSlice";
import PersonCard from "./PersonCard";
import { Link } from "react-router-dom";

function ListPeople() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.people);

  const handleDelete = (id) => {
    dispatch(deletePerson(id));  // Dispatch pour supprimer une personne
  };

  return (
    <div>
      <h1>Liste des personnes</h1>
      <Link to="/add">Ajouter une personne</Link>
      <div>
        {people.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            onDelete={() => handleDelete(person.id)}  // Suppression d'une personne
          />
        ))}
      </div>
    </div>
  );
}

export default ListPeople;
