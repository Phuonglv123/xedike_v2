import {authHeader} from "../helpers/auth";
export const tripsService = {
    getAllRoute
};

function getAllRoute() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:4000/api/trip/allroute`, requestOptions).then(

    );
}