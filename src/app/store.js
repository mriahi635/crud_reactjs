// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../features/peopleSlice";

// Création du store
const store = configureStore({
  reducer: {
    people: peopleReducer,  // Ajout du réducteur "people"
  },
});

export default store;
