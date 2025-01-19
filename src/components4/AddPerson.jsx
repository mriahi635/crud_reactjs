// src/components/AddPerson.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPerson({ addPerson }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
  });

  const navigate = useNavigate();

  // Fonction pour gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target; // Récupère le nom et la valeur du champ
    setFormData({
      ...formData,
      [name]: value, // Met à jour la propriété correspondante
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

    // Créer un nouvel objet pour la personne
    const newPerson = {
      id: Date.now(), // Utiliser un identifiant unique
      name,
      age: parseInt(age, 10), // Convertir l'âge en entier
      city,
    };

    // Dispatch de l'action pour ajouter une personne
    addPerson(newPerson);  
    setFormData({ name: "", age: "", city: "" }); // Réinitialiser le formulaire
    navigate("/"); // Rediriger vers la page d'accueil
  };

  return (
    <div>
      <h1>Ajouter une nouvelle personne</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange} // Appeler handleChange
        />
        <input
          type="number"
          name="age"
          placeholder="Âge"
          value={formData.age}
          onChange={handleChange} // Appeler handleChange
        />
        <input
          type="text"
          name="city"
          placeholder="Ville"
          value={formData.city}
          onChange={handleChange} // Appeler handleChange
        />
        <button type="submit">Ajouter</button> {/* Appeler handleSubmit */}
      </form>
    </div>
  );
}

export default AddPerson;
