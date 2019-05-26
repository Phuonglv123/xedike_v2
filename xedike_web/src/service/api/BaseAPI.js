import Config from "../../config/Config";
import axios from "axios";
import {Modal} from 'antd';
import AppUrl from "../../components/Route/AppURL";


export default class BaseAPI {
    constructor() {
        this.apiUrl = Config.API_URL;
        const {detect} = require('detect-browser');
        this.browser = detect();
    }

    setToken(token) {
        this.token = token;
    }


    async apiCall(option: Option) {
        option.method = option.hasOwnProperty('method') ? option.method : 'GET';
        option.params = option.hasOwnProperty('params') ? option.params : null;
        option.returnRaw = option.hasOwnProperty('returnRaw') ? option.returnRaw : false;
        if (option.params) {
            for (let key in option.params) {
                if (option.params[key] === null) {
                    delete option.params[key]
                }
                if (option.params[key] === '') {
                    delete option.params[key]
                }
            }
        }
        try {
            const res = await axios({
                method: option.method,
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Token ${this.token}`,
                },
                url: `${this.apiUrl}${option.url}`,
                data: option.params,
                validateStatus: status => {
                    return true;
                },
            });
            if (res.status >= 300) {
                // Modal.error({
                //     title: 'Error',
                //     content: 'Something wrong happen, please contact support',
                // });
            }
            if (res.status === 401) {
                AppUrl.history.push(AppUrl.login());
                return res.data;
                // window.location = AppUrl.login();
            }
            if (option.returnRaw) {
                return res
            } else {
                return res.data;
            }
        } catch (e) {
            Modal.error({
                title: 'Error',
                content: 'Something wrong happen, please contact support',
            });
            return {
                data: null,
                error: {}
            }
        }
    }
}

export type Option = {
    url: string,
    method: string,
    returnRaw: boolean,
    params: Object
}