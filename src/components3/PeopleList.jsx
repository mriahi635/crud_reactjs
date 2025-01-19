import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePerson } from "../redux/actions";
import PersonCard from "./PersonCard";

const PeopleList = ({ onEdit, onDetaille }) => {
  const people = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removePerson(id));
  };

  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <PersonCard
            person={person}
            onEdit={onEdit}
            onDelete={handleDelete}
            onDetaille={onDetaille}  
          />
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
