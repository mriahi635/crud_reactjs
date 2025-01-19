// DeletePerson.js

import React from "react";
import { useDispatch } from "react-redux";
import { deletePerson } from "../redux/actions";

const DeletePerson = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePerson(id));
  };

  return <button onClick={handleDelete}>Supprimer</button>;
};

export default DeletePerson;
