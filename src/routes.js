import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Current from './Components/Current/CurrentComponent'
import Forecast from './Components/Forecast/ForecastComponent'

export default (
    <Route path="/" component={App}>
        <Route path="/current" component={Current} />
        <Route path="/forecast" component={Forecast} />
    </Route>
);
