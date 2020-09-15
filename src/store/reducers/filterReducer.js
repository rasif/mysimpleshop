import {SET_SORT_FILTER, SET_SIZE_FILTER} from '../actions/actionTypes';
import FilterService from '../../utils/FilterService';

const initialState = {
    sort: FilterService.getFilters().sort,
    size: FilterService.getFilters().size
 };
 
export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_FILTER:
            return {...state, sort: action.payload};
        case SET_SIZE_FILTER:
            return {...state, size: action.payload};
        default: 
            return state;
    }
 };