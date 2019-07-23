import {userConstants} from '../contants/userContants';
import {alertActions} from './alertActions';
import Auth from "../service/api/Auth";
import usersService from "../service/usersService";

export const userActions = {
    login,
    registerPassenger,
    getInfoDriverActions,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({username}));

        Auth.login({username, password})
            .then(
                user => {
                    dispatch(success(user));
                    Auth.saveUser(user)
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

// function logout() {
//     userService.logout();
//     return {type: userConstants.LOGOUT};
// }

function registerPassenger(passenger) {
    return dispatch => {
        dispatch(request(passenger));

        usersService.registerPassenger({passenger})
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(passenger) {
        return {type: userConstants.REGISTER_REQUEST, passenger}
    }

    function success(passenger) {
        return {type: userConstants.REGISTER_SUCCESS, passenger}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}

function getInfoDriverActions(id) {
    return dispatch => {
        dispatch(request({id}));
        usersService.getDetailsDriver(id)
            .then(
                res => {
                    dispatch(success(res))
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )

    }

    function request(res) {
        return {type: userConstants.GET_DRIVER_REQUEST, res}
    }

    function success(res) {
        return {type: userConstants.GET_DRIVER_SUCCESS, res}
    }

    function failure(error) {
        return {type: userConstants.GET_DRIVER_FAILURE, error}
    }

}
