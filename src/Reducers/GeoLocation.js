export const GEO_LOCATION_SET_LOCATION = "GEO_LOCATION_SET_LOCATION";
export const GEO_LOCATION_SET_IS_AVAILABLE = "GEO_LOCATION_SET_IS_AVAILABLE";

const initialState = {
    position: null,
    isAvailable: null
}

const GeoLocation = (state = initialState, action) => {
    switch(action.type){
        case GEO_LOCATION_SET_LOCATION:
            return {...state, position: action.payload, isAvailable: true}
        default:
            return state;
    }
}

export default GeoLocation;