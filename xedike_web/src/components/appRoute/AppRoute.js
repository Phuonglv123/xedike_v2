import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';

import {history} from '../../helpers/history';
import {Layout} from 'antd';
import AppUrl from "./AppUrl";
import HomeScene from "../../scene/HomeScene/HomeScene";
import SearchRouteScene from "../../scene/SearchRouteScene/SearchRouteScene";
import NotFound404Scene from "../../scene/NotFound404Scene/NotFound404Scene";
import MyHeader from "../HeaderComponents/MyHeader";
import MyFooter from "../FooterComponents/MyFooter";
import {DriverRoute} from "./PrivateRoute";
import CreateRouteScene from "../../scene/DriverScene/CreateRouteScene";

const {Content} = Layout;

export const routes = [
    {
        path: AppUrl.home(),
        exact: true,
        component: HomeScene
    }, {
        path: AppUrl.searchRoute(),
        component: SearchRouteScene,
    }
];

export const routesDriver = [
    {
        path: AppUrl.createRoute(),
        exact: true,
        component: CreateRouteScene
    }
]

class AppRoute extends Component {
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

                                {routesDriver.map((route, index) => (
                                    <DriverRoute key={index} path={route.path} exact={route.exact}
                                           component={route.component} props={route.props}/>
                                ))}
                                <Route component={NotFound404Scene}/>
                            </Switch>
                        </div>
                    </Content>
                    <MyFooter/>
                </Layout>
            </Router>
        );
    }
}


export default AppRoute
