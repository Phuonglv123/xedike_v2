import axios from "axios";
import {Modal} from 'antd';
import config from "../../ultils/config/config";
import AppUrl from '../../components/appRoute/AppUrl'
import {connect} from "react-redux";
import {authHeader} from "../../helpers/auth";


export class BaseAPI {
    constructor() {
        this.apiUrl = config.API_URL;
    }

    setToken() {
        const token = this.props.user.token;
        return token;
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
                headers: authHeader(),
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
                AppUrl.history.push(AppUrl.home());
                return res.data;
                // window.location = AppUrl.login();
            }
            if (option.returnRaw) {
                return res
            } else {
                return res.data;
                Modal.success({
                    title: 'Success'
                })
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


function mapStateToProps(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {
        users,
        user
    }

}

const connectAPI = connect(mapStateToProps)(BaseAPI);
export default connectAPI;



