export const WEATHER_UPDATE_WEATHER = "WEATHER_UPDATE_WEATHER";

const initialState = {
    data: null
}

const Weather = (state = initialState, action) => {
    switch(action.type){
        case WEATHER_UPDATE_WEATHER:
            return {...state, data: action.payload}
        default:
            return state;
    }
}

export default Weather;