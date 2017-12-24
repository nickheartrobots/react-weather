export const GEO_LOCATION_SET_LOCATION = "GEO_LOCATION_SET_LOCATION";
export const GEO_LOCATION_SET_IS_AVAILABLE = "GEO_LOCATION_SET_IS_AVAILABLE";

const initialState = {
    position: null,
    isAvailable: false
}

const GeoLocation = (state = initialState, action) => {
    switch(action.type){
        case GEO_LOCATION_SET_LOCATION:
            return {...state, position: action.payload}
        case GEO_LOCATION_SET_IS_AVAILABLE:
            return {...state, isAvailable: action.payload}
        default:
            return state;
    }
}

export default GeoLocation;