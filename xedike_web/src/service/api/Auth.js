import axios from 'axios';
import config from '../../ultils/config/config';

let jwt = null;

class Auth {
    constructor() {
        this.apiUrl = config.API_URL;

    }

    async login(params) {
        try {
            const res = await axios({
                method: 'POST',
                header: {
                    'Content-type': 'application/json',
                },
                url: `${this.apiUrl}home/login`,
                data: params,
                validateStatus: status => {
                    return true;
                },
            });
            return res.data
        } catch (e) {
            console.log(e)
        }
    }

    logOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('accountType');
        jwt = null;
    };

    getUser() {
        if (jwt) {
            return jwt.user;
        } else {
            return null;
        }
    };

    saveUser(user) {
        try {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('accountType', user.user.accountType)
            }
        } catch (e) {
            console.log(e);
        }
    };

    loadUser() {
        try {
            let user = localStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
            }
            if (user && user.token) {
                jwt = user;
                let token = user.token;
                this.token = token;
            }
        } catch (e) {
            console.log(e);
        }

    }
}

export default new Auth();
