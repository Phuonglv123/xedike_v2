import tripsService from "../service/tripsService";
import {alertActions} from "./alertActions";
import {tripConstants} from "../contants/tripContants";

export const tripActions = {
    searchRoutes,
};

function searchRoutes(locationFrom, locationTo) {
    return dispatch => {
        // eslint-disable-next-line no-undef
        dispatch(request({locationFrom}));
        tripsService.searchRoutes({locationFrom, locationTo})
            .then(
                res => {
                    // eslint-disable-next-line no-undef
                    dispatch(success(res))
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };

    function request(res) {
        return {type: tripConstants.SEARCH_REQUEST, res}
    }

    function success(res) {
        return {type: tripConstants.SEARCH_SUCCESS, res}
    }

    function failure(error) {
        return {type: tripConstants.SEARCH_FAILURE, error}
    }
}

function CreateTrips(data) {
    return dispatch => {
        dispatch(request({data}));
        tripsService.searchRoutes({data})
            .then(
                res => {
                    // eslint-disable-next-line no-undef
                    dispatch(success(res))
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };

    function request(res) {
        return {type: tripConstants.SEARCH_REQUEST, res}
    }

    function success(res) {
        return {type: tripConstants.SEARCH_SUCCESS, res}
    }

    function failure(error) {
        return {type: tripConstants.SEARCH_FAILURE, error}
    }
}

