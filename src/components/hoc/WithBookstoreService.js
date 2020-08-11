import React from 'react';
import { BookstoreConsumer } from '../context/Context';

const WithBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreConsumer>
                {
                    (bookstoreService) => {
                        return <Wrapped {...props} bookstoreService={bookstoreService} />
                    }
                }
            </BookstoreConsumer>
        )
    }
}

export default WithBookstoreService;