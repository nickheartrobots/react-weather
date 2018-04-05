export const WEATHER_UPDATE_CURRENT = "WEATHER_UPDATE_CURRENT";
export const WEATHER_UPDATE_FORCAST = "WEATHER_UPDATE_FORCAST";

const initialState = {
    current: null,
    forcast: null
}
const Weather = (state = initialState, action) => {
    switch(action.type){
        case WEATHER_UPDATE_CURRENT:
            return {...state, current: action.payload}
        case WEATHER_UPDATE_FORCAST:
            return {...state, forcast: action.payload}
        default:
            return state;
    }
}

export default Weather;