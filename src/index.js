import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundery from './components/errorBoundery/ErrorBoundery';
import store from './store';
import { BookstoreProvider } from './components/context/Context';
import App from './components/app/App';
import BookstoreService from './service/BookstoreService';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundery>
            <BookstoreProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreProvider>
        </ErrorBoundery>
    </Provider>,
    document.getElementById('root')
);