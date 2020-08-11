import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './BookHeader.css';

const BookHeader = ({ itemsCount, orderTotal }) => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>BookStore</h1>
            </Link>
            <Link to="/cart">
                <div className="cart-info">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {itemsCount} items ${orderTotal}
                </div>
            </Link>
        </nav>
    )
}

const mapStateToProps = ({ shopCart: { itemsCount, orderTotal } }) => {
    return {
        itemsCount,
        orderTotal
    }
}

export default connect(mapStateToProps)(BookHeader);