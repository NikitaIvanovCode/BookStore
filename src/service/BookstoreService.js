export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Brief Answers to the Big Questions',
            author: 'Stephen Hawking',
            price: 20,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41JU-lDfebL._SX310_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime',
            author: 'Sean M. Carroll',
            price: 45,
            coverImage: 'https://m.media-amazon.com/images/I/517rGp9xRrL.jpg'
        },
        {
            id: 3,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            price: 35,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41zKKWrNUqL._SX321_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: 'Secrets of the JavaScript Ninja',
            author: 'John Resig, Bear Bibeault ,Josip Maras',
            price: 42,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51u9Pg4riRL._SX397_BO1,204,203,200_.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        })
    }
}