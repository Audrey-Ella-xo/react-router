import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Profile from './Profile';

const Routes = () => {
    return(
        <BrowserRouter>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            </ul>

            <hr />
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes