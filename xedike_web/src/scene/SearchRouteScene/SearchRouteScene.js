import React, {Component} from 'react';
import {Button, Card, Col, DatePicker, Icon, Input, Menu, Row} from "antd";
import AppUrl from "../../components/appRoute/AppUrl";
import './SearchRoute.css';
import axios from "axios";

const SubMenu = Menu.SubMenu;

class SearchRouteScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    async componentDidMount() {
        let res = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/trip/allroute',
            responseType: 'stream'
        })
        this.setState({
            data: res.data
        });
    }

    onChangeDate(date, dateString) {
        console.log(date, dateString);
    }

    render() {
        console.log(this.state.data)
        return (
            <div className='component-search'>
                <div>
                    <div className='background-home'>

                    </div>
                    <div className='form-booking'>
                        <div className='tab-form-book'>
                            <div>
                                <Row gutter={16}>
                                    <Col span={6}>
                                        <Input placeholder='From'/>
                                    </Col>
                                    <Col span={1}><Button shape="circle" icon="swap"/></Col>
                                    <Col span={6}>
                                        <Input placeholder='To'/>
                                    </Col>
                                    <Col span={4}>
                                        <DatePicker style={{width: '100%'}} onChange={this.onChangeDate()}/>
                                    </Col>
                                    <Col span={4}>
                                        <DatePicker style={{width: '100%'}} onChange={this.onChangeDate()}/>
                                    </Col>
                                    <Col span={3}>
                                        <Button type='primary' icon='send' onClick={() => {
                                            this.props.history.push(AppUrl.searchRoute())
                                        }}>Seacrh</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='list-route'>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title={<div><h4>Filter Route</h4> <span>Showing 31 Of 31 Buses</span></div>}>

                            </Card>
                        </Col>
                        <Col span={16}>
                            <Row>
                                {this.state.data.map((i, index) => (
                                    <div key={index}>
                                        <Card
                                            style={{width: '100%'}}
                                            actions={[<Icon type="setting"/>, <Icon type="edit"/>,
                                                <Icon type="ellipsis"/>]}
                                        >
                                            <div className='route-detail'>
                                                <div>
                                                    <h3>loai xe</h3>
                                                    <span>chu xe</span>
                                                </div>
                                                <div>
                                                    <h3>{i.startTime}</h3>
                                                    <span>{i.locationFrom}</span>
                                                </div>
                                                <div>
                                                    <div>
                                                        <Icon type="arrow-right"/>
                                                    </div>
                                                    <span> 07h 45m</span>
                                                </div>
                                                <div>
                                                    <h3>{i.endTime}</h3>
                                                    <span>{i.locationTo}</span>
                                                </div>
                                                <div>
                                                    <h3>gia</h3>
                                                    <span>{i.fee}</span>
                                                </div>
                                                <div>
                                                    <div>
                                                        <Button type='primary'> Select seat</Button>
                                                    </div>
                                                    <span>{i.availableSeats}</span>
                                                </div>
                                            </div>
                                        </Card>
                                        <br/>
                                    </div>
                                ))}
                            </Row>
                        </Col>


                    </Row>
                </div>
            </div>
        );
    }
}

export default SearchRouteScene;
