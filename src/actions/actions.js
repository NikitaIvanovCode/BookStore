export const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

export const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED',
    }
}

export const onAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export const onDeletedFromCart = (bookId) => {
    return {
        type: 'BOOK_DELETED_FROM_CART',
        payload: bookId
    }
}

export const onDeletedAllFromCart = (bookId) => {
    return {
        type: 'BOOK_DELETED_ALL_FROM_CART',
        payload: bookId
    }
}

