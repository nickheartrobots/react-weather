import { getWeatherDataByLatLong } from './Weather'
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
        console.log(navigator);
        if("geolocation" in navigator){
            dispatch(setLocationAvailable(true));
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch(setGeoLocation(position));
                dispatch(getWeatherDataByLatLong(position.coords.latitude, position.coords.longitude));
            })
        } else {
            dispatch(setLocationAvailable(false));
        }
    }
}
