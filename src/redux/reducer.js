import { ADD_PERSON, REMOVE_PERSON, UPDATE_PERSON } from './actions';

export const initialPeople = [
  { id: 1, name: "John Doe", age: 30, city: "Paris" },
  { id: 2, name: "Jane Smith", age: 25, city: "Lyon" },
  { id: 3, name: "Alice Johnson", age: 35, city: "Marseille" },
];

export const peopleReducer = (state = initialPeople, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload];
    case REMOVE_PERSON:
      return state.filter(person => person.id !== action.payload);
    case UPDATE_PERSON:
      return state.map(person =>
        person.id === action.payload.id ? action.payload : person
      );
    default:
      return state;
  }
};
