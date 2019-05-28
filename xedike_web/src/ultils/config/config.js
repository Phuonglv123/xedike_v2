import {IS_STAGE} from "./env";

class ConfigDEV {
    API_URL = 'http://localhost:4000/api/';
}

class ConfigSTAG {
    API_URL = 'http://localhost:4000/api/';
}

class ConfigPROD {
    API_URL = 'http://localhost:4000/api/';
}


const config = process.env.NODE_ENV === 'development' ? IS_STAGE ? new ConfigSTAG() : new ConfigDEV() : new ConfigPROD();
// const config = process.env.NODE_ENV === 'development' ? new ConfigSTAG() : new ConfigPROD();

export default config;
