import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Compose from './pages/Compose'
import Read from './pages/Read'

export default function Router () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/feed" component={Feed} />
                <Route path="/profile" component={Profile} />
                <Route path="/compose" component={Compose} />
                <Route path="/read" component={Read} />
            </Switch>
        </BrowserRouter>
    )
}