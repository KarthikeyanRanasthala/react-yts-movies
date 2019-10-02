import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';


import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/search' component={SearchPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;