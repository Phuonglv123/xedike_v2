import { combineReducers } from 'redux';

import { authentication } from './Authentication';
import { registration } from './registerReducers';
import { users } from './userReducers';
import { alert } from './alertReducers';
import {searchTrip} from "./tripReducers";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    searchTrip
});

export default rootReducer;
