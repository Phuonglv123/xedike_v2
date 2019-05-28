import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';

import {history} from '../../helpers/history';
import {alertActions} from '../../actions/alertActions';
import {Layout} from 'antd';
import {userActions} from "../../actions/userActions";
import {userService} from "../../service/usersService";
import AppUrl from "./AppUrl";
import HomeScene from "../../scene/HomeScene/HomeScene";
import SearchRouteScene from "../../scene/SearchRouteScene/SearchRouteScene";
import NotFound404Scene from "../../scene/NotFound404Scene/NotFound404Scene";
import MyHeader from "../HeaderComponents/MyHeader";
import MyFooter from "../FooterComponents/MyFooter";

const {Content} = Layout;

export const routes = [
    {
        path: AppUrl.home(),
        exact: true,
        component: HomeScene
    }, {
        path: AppUrl.searchRoute(),
        component: SearchRouteScene,
    }, {
        component: NotFound404Scene
    }
];

class AppRoute extends Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen(() => {
            dispatch(alertActions.clear());
        });
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    onLogOut = () => {
        userService.logout();
        window.location.reload();
    };

    render() {
        return (
            <Router history={history}>
                <Layout className="layout" id='components-layout-demo-top'>
                    <MyHeader/>
                    <Content>
                        <div style={{background: '#fff', minHeight: '100vh'}}>
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route key={index} path={route.path} exact={route.exact}
                                           component={route.component} props={route.props}/>
                                ))}
                            </Switch>
                        </div>
                    </Content>
                    <MyFooter/>
                </Layout>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {
        user,
        users
    };
}

const connectedApp = connect(mapStateToProps)(AppRoute);
export default connectedApp
