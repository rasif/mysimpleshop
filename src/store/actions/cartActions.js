import {ADD_PRODUCT, DELETE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT} from './actionTypes';

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
});

export const increaseProduct = (id) => ({
    type: INCREASE_PRODUCT,
    payload: id
});

export const decreaseProduct = (id) => ({
    type: DECREASE_PRODUCT,
    payload: id
});