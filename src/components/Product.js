import React from 'react';
import PropTypes from 'prop-types';

const Product = ({product, handleAddProduct}) => {
    console.log('Product');
    return (
        <div className="product">
            <figure className="product__figure">
                <img className="product__img" src={product.source} alt={product.title}/>
            </figure>
            <p className="product__title">{product.title}</p>
            <div className="product__footer">
                <p className="product__price">{product.price} $</p>
                <button className="product__button" 
                        onClick={() => handleAddProduct(product)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        source: PropTypes.string.isRequired,
        sizes: PropTypes.array.isRequired
    }),
    handleAddProduct: PropTypes.func.isRequired
};

export default Product;