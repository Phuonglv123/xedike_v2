import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// export const PassengerRoute = ({component: Component, ...rest}) => (
//     <Route {...rest} render={props => (
//         this.props.user.user.accountType === 'passenger'
//             ? <Component {...props} />
//             : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
//     )}/>
// );

export const DriverRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('accountType') === "driver"
            ? <Component {...props} />
            : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
    )}/>
);
