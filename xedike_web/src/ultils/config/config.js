import {IS_STAGE} from './env';

class ConfigDEV {
    API_URL = 'http://localhost:5000/api/';
}

class ConfigSTAG {
    API_URL = 'https://infinite-chamber-98247.herokuapp.com/api/';
}

class ConfigPROD {
    API_URL = 'https://infinite-chamber-98247.herokuapp.com/api/';
}


const config = process.env.NODE_ENV === 'development' ? IS_STAGE ? new ConfigSTAG() : new ConfigDEV() : new ConfigPROD();
// const config = process.env.NODE_ENV === 'development' ? new ConfigSTAG() : new ConfigPROD();

export default config;
