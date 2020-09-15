import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({cartItem, handleDeleteProduct, handleIncreaseProduct, handleDecreaseProduct}) => {
    console.log('CartItem');

    return (
        <div className="cartItem" key={cartItem.key}>
            <figure className="cartItem__figure">
                <img className="cartItem__image" 
                     src={cartItem.source} 
                     alt={cartItem.title}/>
            </figure>
            <p className="cartItem__title">{cartItem.title}</p>
            <p className="cartItem__price">{cartItem.price} $</p>
            <div className="cartItem__realization"> 
                <i className="cartItem__decrease fas fa-angle-left" 
                   onClick={() => handleDecreaseProduct(cartItem.id)}></i>
                <p className="cartItem__count">{cartItem.count}</p>
                <i className="cartItem__increase fas fa-angle-right" 
                   onClick={() => handleIncreaseProduct(cartItem.id)}></i>
            </div>
            <i className="cartItem__delete fas fa-times" onClick={() => handleDeleteProduct(cartItem.id)}></i>
        </div>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        source: PropTypes.string.isRequired,
        sizes: PropTypes.array.isRequired,
        count: PropTypes.number.isRequired
    }),
    handleDeleteProduct: PropTypes.func.isRequired,
    handleDecreaseProduct: PropTypes.func.isRequired,
    handleIncreaseProduct: PropTypes.func.isRequired
};

export default CartItem;