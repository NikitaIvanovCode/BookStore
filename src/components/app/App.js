import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookHeader from '../bookHeader/BookHeader';
import { Catalog, Cart } from '../pages';
import './App.css';

const App = () => {
    return (
        <div className="wrapp">
            <BookHeader />
            <div className="container">
                <Switch>
                    <Route path="/" component={Catalog} exact />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </div>
    )
}

export default App;