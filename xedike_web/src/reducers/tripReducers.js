import {tripConstants} from "../contants/tripContants";

export function searchTrip(state = {}, action) {
    switch (action.type) {
        case tripConstants.SEARCH_REQUEST:
            return {
                searching: true,

            };
        case tripConstants.SEARCH_SUCCESS:
            return {resultSearch: action.res,};
        case tripConstants.SEARCH_FAILURE:
            return {};
        default:
            return state
    }
}

// function createTrips(state = {}, action) {
//     switch (action.type) {
//         case tripConstants.CREATE_TRIPS_REQUEST:
//             return {};
//         case tripConstants.CREATE_TRIPS_SUCCESS:
//             return {resultTrip: action.res};
//         case tripConstants.CREATE_TRIPS_FAILURE:
//             return {};
//         default:
//             return state;
//     }
//
// }
