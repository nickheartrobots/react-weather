import { getGeoLocation } from './GeoLocation'
import {
    WEATHER_UPDATE_CURRENT,
    WEATHER_UPDATE_forecast
} from '../Reducers/Weather';

const updateCurrent = (weatherData) => {
    return {
        type: WEATHER_UPDATE_CURRENT,
        payload: weatherData
    }
}

const updateforecast = (weatherData) => {
    return {
        type: WEATHER_UPDATE_forecast,
        payload: weatherData
    }
}

const fetchCurrentWeather = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => response.json())
            .then(response => dispatch(updateCurrent(response)))
            .catch(err => console.error(err))
    }    
}

const fetchforecast = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => response.json())
            .then(response => dispatch(updateforecast(response)))
            .catch(err => console.error(err))
    }
}

export const getCurrentWeatherByLatLon = (lat, lon) => {
    return fetchCurrentWeather(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=4279ef20f8a5d8094b433b8d7886d760`);
}

const getCurrentWeatherByZip = (zip) => {
    return fetchCurrentWeather(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&APPID=4279ef20f8a5d8094b433b8d7886d760`);
}

export const getforecastByLatLon = (lat, lon) => {
    return fetchforecast(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&APPID=4279ef20f8a5d8094b433b8d7886d760`);
}

const getforecastByZip = (zip) => {
    return fetchforecast(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&APPID=4279ef20f8a5d8094b433b8d7886d760`);
}

export const getWeatherByLocation = () => {
    return (dispatch, getState) => {
        dispatch(getGeoLocation());
    }
}

export const getWeatherByZip = (zip) => {
    return (dispatch) => {
        dispatch(getCurrentWeatherByZip(zip));
        dispatch(getforecastByZip(zip));
    }
}