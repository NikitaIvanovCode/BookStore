const updateBookList = (state, action) => {
    if (state === undefined) {
        return {
            books: [],
            loading: true
        }
    }

    switch (action.type) {
        case 'FETCH_BOOKS_REQUESTED':
            return {
                books: [],
                loading: true
            }

        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                loading: false
            }

        default:
            return state.bookList;
    }
}

export default updateBookList;