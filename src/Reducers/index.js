import { combineReducers } from 'redux';
import GeoLocation from './GeoLocation';
import Weather from './Weather';

const Reducers = combineReducers({
    GeoLocation,
    Weather
});

export default Reducers;

