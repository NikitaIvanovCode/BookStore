import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { coverImage, title, author, price } = book;
    return (
        <div className="list-item">
            <img src={coverImage} alt="img" className="item__img" />
            <div className="item__info">
                <h4>{title}</h4>
                <p>{author}</p>
                <h4>${price}</h4>
                <button onClick={onAddedToCart} className="btn btn-info">Add to Cart</button>
            </div>
        </div>
    )
}

export default BookListItem;