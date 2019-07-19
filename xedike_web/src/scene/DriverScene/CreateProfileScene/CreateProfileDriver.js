import React, {Component} from 'react';
import {Col, Icon, Menu, Row} from "antd";
import {Link} from "react-router-dom";
import './CreateProfileDriver.css';
import {DriverRoute} from "../../../components/appRoute/PrivateRoute";
import InformationPersonal from "./MenuProfile/InformationPersonal";
import AppUrl from "../../../components/appRoute/AppUrl";
import connectInfoDriver from "./MenuProfile/InformationCar";
import HistoryRoute from "./MenuProfile/HistoryRoute";
import RateOfPassenger from "./MenuProfile/RateOfPassenger";

class CreateProfileDriver extends Component {
    render() {
        return (
            <div className='componentProfile'>
                <div className='background-home'/>
                <div className='contentProfile'>
                    <div className='menuProfile'>
                        <Row gutter={32}>
                            <Col span={6}>
                                <div className='avatarProfile'>
                                    <img src={require('../../../ultils/images/bck-acc-em.png')} alt=""/>
                                </div>
                                <div>
                                    <Menu theme="white" mode="inline"
                                          defaultOpenKeys={['1']}
                                          defaultSelectedKeys={['1']}>
                                        <Menu.Item key="1">
                                            <Link to={AppUrl.profileDriver()}>
                                                <Icon type="compass"/>
                                                <span>Information Personal</span>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key='2'>
                                            <Link to={AppUrl.carInfo()}>
                                                <Icon type="compass"/>
                                                <span>Information Car</span>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key='3'>
                                            <Link to={AppUrl.historyRoute()}>
                                                <Icon type="compass"/>
                                                <span>History Route</span>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item key='4'>
                                            <Link to={AppUrl.ratePassenger()}>
                                                <Icon type="compass"/>
                                                <span>Rate of Passenger</span>
                                            </Link>
                                        </Menu.Item>
                                    </Menu>
                                </div>
                            </Col>
                            <Col span={18}>
                                <DriverRoute path={AppUrl.profileDriver()} component={InformationPersonal}
                                             exact={true}/>
                                <DriverRoute path={AppUrl.carInfo()} component={connectInfoDriver}/>
                                <DriverRoute path={AppUrl.historyRoute()} component={HistoryRoute}/>
                                <DriverRoute path={AppUrl.ratePassenger()} component={RateOfPassenger}/>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateProfileDriver;
