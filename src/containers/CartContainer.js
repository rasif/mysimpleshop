import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from '../components/CartItem';
import {deleteProduct, increaseProduct, decreaseProduct} from '../store/actions/cartActions';

class CartContainer extends Component {
    getTotal = () => {
        let total = 0;

        for (let i = 0; i < this.props.carts.length; i++) {
            total += this.props.carts[i].count * this.props.carts[i].price;
        }

        return total;
    };

    render() {
        console.log('CartContainer');
        return (
            <div className="cart">
                {
                    this.props.carts.map(item => <CartItem cartItem={item} 
                                                           key={item.id}
                                                           handleDeleteProduct={this.props.deleteProduct}
                                                           handleIncreaseProduct={this.props.increaseProduct}
                                                           handleDecreaseProduct={this.props.decreaseProduct}/>)
                }
                <span className="cart__total">Total: {this.getTotal()} $</span>
            </div>
        );
    }
}

const mapStateToProps = state => ({carts: state.cartState.carts});

const mapDispatchToProps = dispatch => ({deleteProduct: (id) => dispatch(deleteProduct(id)),
                                         increaseProduct: id => dispatch(increaseProduct(id)),
                                         decreaseProduct: id => dispatch(decreaseProduct(id))});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);