import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initialPeople } from "./components2/data";
import ListPeople from "./components2/ListPeople";
import AddPerson from "./components2/AddPerson";
import UpdatePerson from "./components2/UpdatePerson";
import PersonDetail from "./components2/PersonDetail";

function App() {
  const [people, setPeople] = useState(initialPeople);

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  };

  const updatePerson = (updatedPerson) => {
    setPeople(
      people.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
  };

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={<ListPeople people={people} deletePerson={deletePerson} />}
        />
        <Route path="/add" element={<AddPerson addPerson={addPerson} />} />
        <Route
          path="/update/:id"
          element={<UpdatePerson people={people} updatePerson={updatePerson} />}
        />
        <Route
          path="/details/:id"
          element={<PersonDetail people={people} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
