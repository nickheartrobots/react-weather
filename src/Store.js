import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const Store = createStore(Reducers, applyMiddleware(thunk, createLogger()));

export default Store;