import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../bookListItem/BookListItem';
import WithBookstoreService from '../hoc/WithBookstoreService';
import { booksLoaded, booksRequested, onAddedToCart } from '../../actions/actions';
import Spinner from '../spinner/Spinner';
import './BookList.css';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul>
            {
                books.map(book => {
                    return <li key={book.id}><BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} /></li>
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {
    componentDidMount() {
        const { bookstoreService, booksLoaded, booksRequested } = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const { books, loading, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading } }) => {
    return {
        books,
        loading
    }
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    onAddedToCart
}


export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));