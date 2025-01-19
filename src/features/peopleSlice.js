// src/features/peopleSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Données initiales
const initialState = {
  people: [
    { id: 1, name: "John Doe", age: 30, city: "Paris" },
    { id: 2, name: "Jane Smith", age: 25, city: "Lyon" },
    { id: 3, name: "Alice Johnson", age: 35, city: "Marseille" },
  ],
};

// Création du slice
const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.people.push(action.payload);  // Ajout d'une nouvelle personne
    },
    updatePerson: (state, action) => {
      const index = state.people.findIndex(person => person.id === action.payload.id);
      if (index !== -1) {
        state.people[index] = action.payload;  // Mise à jour de la personne
      }
    },
    deletePerson: (state, action) => {
      state.people = state.people.filter(person => person.id !== action.payload); // Suppression d'une personne
    }
  }
});

// Exportation des actions
export const { addPerson, updatePerson, deletePerson } = peopleSlice.actions;

// Exportation du réducteur
export default peopleSlice.reducer;
