import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePerson({ people, updatePerson }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", age: "", city: "" });

  useEffect(() => {
    const person = people.find((p) => p.id === parseInt(id, 10));
    if (person) {
      setFormData(person);
    }
  }, [id, people]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.city) {
      alert("Tous les champs sont obligatoires !");
      return;
    }
    updatePerson(formData);
    navigate("/");
  };

  return (
    <div>
      <h1>Modifier une personne</h1>
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
      <button onClick={handleSubmit}>Modifier</button>
    </div>
  );
}

export default UpdatePerson;
