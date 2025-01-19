import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPerson({ addPerson }) {
  const [formData, setFormData] = useState({ name: "", age: "", city: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.city) {
      alert("Tous les champs sont obligatoires !");
      return;
    }
    const newPerson = {
      id: Date.now(),
      name: formData.name,
      age: parseInt(formData.age, 10),
      city: formData.city,
    };
    addPerson(newPerson);
    navigate("/");
  };
  

  return (
    <div>
      <h1>Ajouter une nouvelle personne</h1>
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
      <button onClick={handleSubmit}>Ajouter</button>
    </div>
  );
}

export default AddPerson;
