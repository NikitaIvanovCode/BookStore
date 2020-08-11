import updateBookList from './bookList';
import updateShopCart from './shopCart';


const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shopCart: updateShopCart(state, action)
    }
}

export default reducer;