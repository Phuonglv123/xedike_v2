import {BaseAPI} from "./api/BaseAPI";

class TripsService extends BaseAPI {

    async getAllTrip() {
        const res = await this.apiCall({
            url: "trip/allroute",
            method: "GET",
        });
        return res;
    }

    async bookTripId(id_trip, params) {
        const res = await this.apiCall({
            url: `trip/book/${id_trip}`,
            method: "POST",
            params: params,
        });
        return res;
    }

    async searchRoutes(params) {
        const res = await this.apiCall({
            url: 'trip/search',
            method: 'POST',
            params: params
        });
        return res;
    }

    async createTrip(params) {
        const res = await this.apiCall({
            url: 'trip/create',
            method: 'POST',
            params: params
        });
        return res
    }

    async finishTrip(id) {
        const res = await this.apiCall({
            url: `finish/${id}`,
            method: 'POST'
        });
        return res;
    }

    async rateTrip(id, params) {
        const res = await this.apiCall({
            url: `rate/${id}`,
            method: 'POST',
            params: params
        });
        return res;
    }
}

export default new TripsService();
