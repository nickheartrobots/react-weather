export const WEATHER_UPDATE_CURRENT = "WEATHER_UPDATE_CURRENT";
export const WEATHER_UPDATE_forecast = "WEATHER_UPDATE_forecast";

const initialState = {
    current: null,
    forecast: null
}
const Weather = (state = initialState, action) => {
    switch(action.type){
        case WEATHER_UPDATE_CURRENT:
            return {...state, current: action.payload}
        case WEATHER_UPDATE_forecast:
            return {...state, forecast: action.payload}
        default:
            return state;
    }
}

export default Weather;