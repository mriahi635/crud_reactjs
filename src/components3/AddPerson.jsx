import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../redux/actions";

const AddPerson = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: Date.now(),
      name,
      age: parseInt(age),
      city,
    };
    dispatch(addPerson(newPerson));
    setName("");
    setAge("");
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        required
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
      />
      <button type="submit">Add Person</button>
    </form>
  );
};

export default AddPerson;
