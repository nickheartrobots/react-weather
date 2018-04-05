import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Current from './Components/Current/CurrentComponent'
import Forcast from './Components/Forcast/ForcastComponent'

export default (
    <Route path="/" component={App}>
        <Route path="/current" component={Current} />
        <Route path="/forcast" component={Forcast} />
    </Route>
);
