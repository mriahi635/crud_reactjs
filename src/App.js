// -----------------------------------simple avec component2--------------------------------------------------------------------------------
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { initialPeople } from "./components2/data";
// import ListPeople from "./components2/ListPeople";
// import AddPerson from "./components2/AddPerson";
// import UpdatePerson from "./components2/UpdatePerson";
// import PersonDetail from "./components2/PersonDetail";

// function App() {
//   const [people, setPeople] = useState(initialPeople);

//   const addPerson = (newPerson) => {
//     setPeople([...people, newPerson]);
//   };

//   const updatePerson = (updatedPerson) => {
//     setPeople(
//       people.map((person) =>
//         person.id === updatedPerson.id ? updatedPerson : person
//       )
//     );
//   };

//   const deletePerson = (id) => {
//     setPeople(people.filter((person) => person.id !== id));
//   };

//   return (
//     <Router>
//       <Routes>
//       <Route
//           path="/"
//           element={<ListPeople people={people} deletePerson={deletePerson} />}
//         />
//         <Route path="/add" element={<AddPerson addPerson={addPerson} />} />
//         <Route
//           path="/update/:id"
//           element={<UpdatePerson people={people} updatePerson={updatePerson} />}
//         />
//         <Route
//           path="/details/:id"
//           element={<PersonDetail people={people} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// =============redux avec component 3===================================================================

// App.js

// App.js

// import React from "react";
// import { Route, Routes, Link, useNavigate } from "react-router-dom";
// import AddPerson from "./components3/AddPerson";
// import PeopleList from "./components3/PeopleList";
// import EditPerson from "./components3/EditPerson";
// import PersonDetail from "./components3/PersonDetail";  // Importer le composant PersonDetail

// function App() {
//   const navigate = useNavigate();

//   const handleEdit = (person) => {
//     navigate(`/edit/${person.id}`, { state: { person } });
//   };

//   const handleDetail = (personId) => {
//     navigate(`/details/${personId}`);  // Naviguer vers la page de détails avec l'ID
//   };

//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/add">Add Person</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<PeopleList onEdit={handleEdit} onDetaille={handleDetail} />} />
//         <Route path="/add" element={<AddPerson />} />
//         <Route path="/edit/:id" element={<EditPerson />} />
//         <Route path="/details/:id" element={<PersonDetail />} />  {/* Route pour afficher les détails */}
//       </Routes>
//     </div>
//   );
// }

// export default App;

// +++++++++++++++++++redux toolkit avec component4 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useDispatch } from "react-redux";
import ListPeople from "./components4/ListPeople";
import AddPerson from "./components4/AddPerson";
import UpdatePerson from "./components4/UpdatePerson";
import PersonDetail from "./components4/PersonDetail";

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPeople />} />
        <Route path="/add" element={<AddPerson />} />
        <Route path="/update/:id" element={<UpdatePerson  />} />
        <Route path="/details/:id" element={<PersonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
