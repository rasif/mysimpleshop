import React from 'react';

import ProductsContainer from '../containers/ProductsContainer';
import CartContainer from '../containers/CartContainer';

const Main = () => {
    console.log('Main');
    return (
        <main className="main">
            <div className="main__left">
                <ProductsContainer/>
            </div>
            <div className="main__right">
                <CartContainer/>
            </div>
        </main>
    );
}

export default Main;