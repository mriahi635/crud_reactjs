import { createStore } from 'redux';
import { peopleReducer } from './reducer';

const store = createStore(peopleReducer);

export default store;
