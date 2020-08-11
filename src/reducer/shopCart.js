const uppdateCartItems = (cartItems, newItem, index) => {
    if (newItem.count === 0) {
        return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)]
    }

    if (index > -1) {
        return [...cartItems.slice(0, index), newItem, ...cartItems.slice(index + 1)]
    }
    else {
        return [...cartItems, newItem]
    }
}

const uppdateCart = (state, bookId, quantity) => {
    const { bookList: { books }, shopCart: { cartItems, itemsCount, orderTotal } } = state;
    const book = books.find(book => book.id === bookId);
    const indexItem = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[indexItem];
    let newItem;
    if (item) {
        newItem = {
            ...item,
            count: item.count + quantity,
            total: item.total + quantity * book.price
        }
    }
    else {
        newItem = {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price
        }
    }

    return {
        cartItems: uppdateCartItems(cartItems, newItem, indexItem),
        itemsCount: itemsCount + quantity,
        orderTotal: orderTotal + quantity * book.price
    }
}

const updateShopCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
            itemsCount: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return uppdateCart(state, action.payload, 1)

        case 'BOOK_DELETED_FROM_CART':
            return uppdateCart(state, action.payload, -1)

        case 'BOOK_DELETED_ALL_FROM_CART':
            const item = state.shopCart.cartItems.find(({ id }) => id === action.payload);
            return uppdateCart(state, action.payload, -item.count)

        default:
            return state.shopCart;
    }
}

export default updateShopCart;