import { combineReducers } from 'redux';
import {cartReducer as cartState} from './cartReducer';
import {filterReducer as filterState} from './filterReducer';

const rootReducer = combineReducers({cartState, filterState});

export default rootReducer;