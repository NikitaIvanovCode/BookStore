import React from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.css';
import { onAddedToCart, onDeletedFromCart, onDeletedAllFromCart } from '../../actions/actions';

const ShoppingCart = ({ cartItems, orderTotal, onIncrease, onDecrease, onDelete }) => {
    const row = ({ id, title, count, total }, inx) => {
        return (
            <tr key={id}>
                <td>{inx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button onClick={() => onIncrease(id)} className="btn btn-outline-success">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button onClick={() => onDecrease(id)} className="btn btn-outline-warning">
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button onClick={() => onDelete(id)} className="btn btn-outline-danger">
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="shopping-cart-table">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">count</th>
                        <th scope="col">total</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(row)}
                </tbody>
            </table>
            <div className="total">
                Total: ${orderTotal}
            </div>
        </div>
    )
}

const mapStateToProps = ({ shopCart: { cartItems, orderTotal } }) => {
    return {
        cartItems,
        orderTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(onAddedToCart(id)),
        onDecrease: (id) => dispatch(onDeletedFromCart(id)),
        onDelete: (id) => dispatch(onDeletedAllFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);