import {tripConstants} from "../contants/tripContants";

export function searchTrip(state = {}, action) {
    switch (action.type) {
        case tripConstants.SEARCH_REQUEST:
            return { searching: true };
        case tripConstants.SEARCH_SUCCESS:
            return {};
        case tripConstants.SEARCH_FAILURE:
            return {};
        default:
            return state
    }
}
