import React, {Component} from 'react';
import {Col, Icon, Menu, Row} from "antd";
import './CreateRouteScene.css';
import {Link} from "react-router-dom";
import AppUrl from "../../../components/appRoute/AppUrl";
import {DriverRoute} from "../../../components/appRoute/PrivateRoute";
import WrappedNormalCreateRoute from "./CreateTripsForDriver/CreateTripsForDriver";
import ManagerTripForDriver from "./ManagerTripsForDriver/ManagerTripForDriver";

class CreateRouteScene extends Component {


    render() {

        return (
            <div className='component-createRoute'>
                <div>
                    <div className='background-home'/>
                    <div style={{width: '90%', margin: '0 auto', padding: '20px'}}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <div>
                                    <Menu theme="white" mode="inline"
                                          defaultOpenKeys={['1']}
                                          defaultSelectedKeys={['1']}>
                                        <Menu.Item key="1">
                                            <Link to={AppUrl.createRoute()}>
                                                <Icon type="compass"/>
                                                <span>Create my trips</span>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key='2'>
                                            <Link to={AppUrl.managerTrip()}>
                                                <Icon type="compass"/>
                                                <span>Manager my trips</span>
                                            </Link>
                                        </Menu.Item>
                                    </Menu>
                                </div>
                            </Col>
                            <Col span={16}>
                                <DriverRoute path={AppUrl.createRoute()} component={WrappedNormalCreateRoute}
                                             exact={true}/>
                                <DriverRoute path={AppUrl.managerTrip()} component={ManagerTripForDriver}/>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateRouteScene
