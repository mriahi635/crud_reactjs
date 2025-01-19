export const ADD_PERSON = "ADD_PERSON";
export const REMOVE_PERSON = "REMOVE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";

export const addPerson = (person) => ({
  type: ADD_PERSON,
  payload: person,
});

export const removePerson = (id) => ({
  type: REMOVE_PERSON,
  payload: id,
});

export const updatePerson = (person) => ({
  type: UPDATE_PERSON,
  payload: person,
});
