import {
    WEATHER_UPDATE_WEATHER,
} from '../Reducers/Weather';

const updateWeather = (weatherData) => {
    return {
        type: WEATHER_UPDATE_WEATHER,
        payload: weatherData
    }
}

const fetchWeather = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => response.json())
            .then((response) => {
                dispatch(updateWeather(response.query));
            })
            .catch(err => console.error(err))
    }    
}

export const getWeatherDataByLatLong = (lat, long) => {
    return fetchWeather(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(${lat}%2C${long})%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
}

export const getWeatherDataByZip = (zip) => {

}