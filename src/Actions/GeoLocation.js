import { getCurrentWeatherByLatLon, getForcastByLatLon } from './Weather'
import {
    GEO_LOCATION_SET_LOCATION,
    GEO_LOCATION_SET_IS_AVAILABLE
} from '../Reducers/GeoLocation'

const setLocationAvailable = (isAvailable) => {
    return {
        type: GEO_LOCATION_SET_IS_AVAILABLE,
        payload: isAvailable
    }
}

const setGeoLocation = (location) => {
    return {
        type: GEO_LOCATION_SET_LOCATION,
        payload: location
    }
}

export const getGeoLocation = () => {
    return (dispatch) => {
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords;
                dispatch(setGeoLocation(position));
                dispatch(setLocationAvailable(true));
                dispatch(getCurrentWeatherByLatLon(latitude, longitude));
                dispatch(getForcastByLatLon(latitude, longitude));
            })
        } else {
            dispatch(setLocationAvailable(false));
        }
    }
}
