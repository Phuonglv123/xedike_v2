import {BaseAPI} from "./api/BaseAPI";

class usersService extends BaseAPI {
    async registerPassenger(params) {
        const res = await this.apiCall({
            url: 'passenger/register',
            method: 'POST',
            params: params
        });
        return res;
    }

    async registerDriver(params) {
        const res = await this.apiCall({
            url: 'driver/register',
            method: "POST",
            params: params
        });
        return res;
    }

    async getDetailsDriver(id) {
        const res = await this.apiCall({
            url: `driver/detail/${id}`,
            method: "GET",
        });
        return res;
    }

    async createInfoDriver(params) {
        const res = await this.apiCall({
            url: 'driver/detail',
            method: 'POST',
            params: params
        });
        return res;
    }
}

export default new usersService();
