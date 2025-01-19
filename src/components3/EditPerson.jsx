import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePerson } from "../redux/actions";

const EditPerson = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const person = location.state?.person;  // Assurez-vous de récupérer la personne via useLocation()

  const [name, setName] = useState(person?.name || "");
  const [age, setAge] = useState(person?.age || "");
  const [city, setCity] = useState(person?.city || "");

  const dispatch = useDispatch();

  useEffect(() => {
    if (person) {
      setName(person.name);
      setAge(person.age);
      setCity(person.city);
    }
  }, [person]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPerson = { ...person, name, age: parseInt(age), city };
    dispatch(updatePerson(updatedPerson));  // Mettre à jour la personne dans Redux
    navigate("/");  // Retour à la page principale après la mise à jour
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate("/")}>
        Cancel
      </button>
    </form>
  );
};

export default EditPerson;
