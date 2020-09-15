import {SET_SORT_FILTER, SET_SIZE_FILTER} from './actionTypes';

export const setSortFilter = (sortType) => ({
    type: SET_SORT_FILTER,
    payload: sortType
});

export const setSizeFilter = (sizeType) => ({
    type: SET_SIZE_FILTER,
    payload: sizeType
});