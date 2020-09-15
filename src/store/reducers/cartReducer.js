import {ADD_PRODUCT, DELETE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT} from '../actions/actionTypes';
import CartService from '../../utils/CartService';

const initialState = {
   carts: CartService.getCartItems() 
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const carts = state.carts.slice();

            let isInBasket = false;

            carts.forEach(item => {
                if (item.id === action.payload.id) {
                    item.count++; 
                    isInBasket = true;  
                }
            });

            if (!isInBasket) {
                carts.push(action.payload);
            }

            localStorage.setItem('cart', JSON.stringify(carts));

            return {...state, carts};
        case DELETE_PRODUCT:
            const deletedProducts = state.carts.slice().filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(deletedProducts));
            return {...state, carts: deletedProducts};
        case INCREASE_PRODUCT:
            const increasedProducts = state.carts.slice();
            
            increasedProducts.forEach(item => {
                if (item.id === action.payload) {
                    item.count++;
                }
            });

            localStorage.setItem('cart', JSON.stringify(increasedProducts));

            return {...state, carts: increasedProducts};
        case DECREASE_PRODUCT:
            const decreasedProducts = state.carts.slice();

            decreasedProducts.forEach(item => {
                if (item.id === action.payload) {
                        if (item.count > 1)
                            item.count--;
                }
            });

            localStorage.setItem('cart', JSON.stringify(decreasedProducts));

            return {...state, carts: decreasedProducts};
        default: 
            return state;
    }
};  