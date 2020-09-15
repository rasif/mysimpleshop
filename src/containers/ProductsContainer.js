import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

import ProductService from '../utils/ProductService';
import {setSortFilter, setSizeFilter} from '../store/actions/filterActions';
import {addProduct} from '../store/actions/cartActions';

class ProductsContainer extends Component {
    constructor() {
        super();

        this.products = ProductService.getAllProducts().slice();

        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

    handleChangeFilter(event) {
        if (event.target.name === 'sortFilter') {
            this.props.setSortFilter(event.target.value);
            localStorage.setItem('filter', JSON.stringify({sort: event.target.value, size: this.props.size}));
        } else if (event.target.name === 'sizeFilter') {
            this.props.setSizeFilter(event.target.value);
            localStorage.setItem('filter', JSON.stringify({sort: this.props.sort, size: event.target.value}));
        }
    }

    filterProductsBySort(products, sort) {
        switch (sort) {
            case 'lessewable':
                return products.sort((a, b) => a.price < b.price ? 1 : -1);
            case 'largeable': 
                return products.sort((a, b) => a.price > b.price ? 1 : -1);
            default: 
                return ProductService.getAllProducts();
        }  
    }

    filterProductsBySize(products, size) {
        if (size === 'All')
            return products;

            return products.filter(product => product.sizes.indexOf(size) >= 0);
    }

    filterProducts() {
        let filteredProducts;

        filteredProducts = this.filterProductsBySort(this.products, this.props.sort);
        filteredProducts = this.filterProductsBySize(filteredProducts, this.props.size);

        return filteredProducts;
    }

    render() {
        console.log('ProductsContainer');
        const products = this.filterProducts();
        
        return (
            <React.Fragment>
                <Filter count={products.length} 
                        sort={this.props.sort} 
                        size={this.props.size}
                        handleChangeFilter={this.handleChangeFilter}/>
                <ProductList products={products}
                             handleAddProduct={this.props.addProduct}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({sort: state.filterState.sort, 
                                   size: state.filterState.size});

const mapDispatchToProps = dispatch => ({setSortFilter: (sortValue) => dispatch(setSortFilter(sortValue)),
                                         setSizeFilter: (sizeValue) => dispatch(setSizeFilter(sizeValue)),
                                         addProduct: (product) => dispatch(addProduct(product))});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);