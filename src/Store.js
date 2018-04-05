import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const midlleWare = applyMiddleware(
    thunk,
    //createLogger()
);

const Store = createStore(Reducers, midlleWare);

export default Store;