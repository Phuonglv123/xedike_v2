import {BaseAPI} from "./api/BaseAPI";

class TripsService extends BaseAPI {

    async getAllTrip() {
        const res = await this.apiCall({
            url: "trip/allroute",
            method: "GET",
        });
        return res;
    }

    async bookTripId(id_passenger, params){
        const res = await this.apiCall({
            url: `trip/book/${id_passenger}`,
            method: "POST",
            params: params,
        });
        return res;
    }
}

export default new TripsService();