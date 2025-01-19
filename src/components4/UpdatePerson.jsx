// src/components/UpdatePerson.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePerson } from "../features/peopleSlice";

function UpdatePerson() {
  const { id } = useParams(); // Récupérer l'id depuis l'URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const person = useSelector((state) =>
    state.people.people.find((person) => person.id === parseInt(id))
  ); // Chercher la personne par son ID dans le store

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    if (person) {
      setFormData({
        name: person.name,
        age: person.age,
        city: person.city,
      });
    }
  }, [person]);

  // Fonction pour gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, city } = formData;

    if (!name || !age || !city) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    const updatedPerson = {
      id: parseInt(id),
      name,
      age: parseInt(age, 10),
      city,
    };

    // Dispatch de l'action pour mettre à jour la personne
    dispatch(updatePerson(updatedPerson)); 
    navigate("/"); // Rediriger vers la page d'accueil
  };

  if (!person) {
    return <div>Personne introuvable</div>;
  }

  return (
    <div>
      <h1>Modifier la personne</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Âge"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Ville"
          value={formData.city}
          onChange={handleChange}
        />
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UpdatePerson;
