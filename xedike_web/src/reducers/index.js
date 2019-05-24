import { combineReducers } from 'redux';

import { authentication } from './Authentication';
import { registration } from './registerReducers';
import { users } from './userReducers';
import { alert } from './alertReducers';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;
