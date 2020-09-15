import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const state = createStore(rootReducer);

export default state;