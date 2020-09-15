import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductList = (props) => {
    console.log('ProductList');
    return (
        <div className="products">
            { 
                props.products.map(product => <Product key={product.id}
                                                       product={product}
                                                       handleAddProduct={props.handleAddProduct}/>)
            }
            <div className="product"></div>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    handleAddProduct: PropTypes.func.isRequired
};

export default ProductList;