import React, {Component} from 'react';
import {Card, Col, Form, Input, Row, Checkbox, Button, List, Icon} from "antd";
import tripsService from "../../../service/tripsService";
import {connect} from "react-redux";
import usersService from "../../../service/usersService";
import './CreateRouteScene.css';
import {getInfoDriver} from "../../../reducers/userReducers";
import {userActions} from "../../../actions/userActions";

class CreateRouteScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wifi: false,
            food: false,
            drink: false,
            music: false,
            pet: false,
            wetTowel: false,
            locationFrom: null,
            locationTo: null,
            startTime: null,
            availableSeats: null,
            fee: null,
            endTime: null,

            data: [],
            dataDriver: [],
        }
    }

    handleChangeCheck = e => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = async (e) => {
        e.preventDefault();
        let {wifi, food, drink, music, pet, wetTowel, locationFrom, locationTo, startTime, endTime, fee, availableSeats} = this.state;
        let res = await tripsService.createTrip({
            wifi, food, drink, music, pet, wetTowel, locationFrom, locationTo, startTime, endTime, fee, availableSeats
        });

        this.setState({
            data: res
        })
    };

    async componentDidMount() {
        let id = this.props.user.user._id;
        const {dispatch} = this.props;
        await dispatch(userActions.getInfoDriverActions(id));
    }


    render() {
        const user = this.props.user.user;
        const {dataDriver} = this.state;
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='component-createRoute'>
                <div>
                    <div className='background-home'/>
                    <div style={{width: '90%', margin: '0 auto', padding: '20px'}}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Information Driver" bordered={true} style={{width: '100%'}}>
                                    {dataDriver ? <List
                                        header={null}
                                        footer={null}
                                        dataSource={dataDriver.carInfo}
                                        renderItem={item => (
                                            <List.Item>
                                                <div style={{width: '100%'}}>
                                                    <div className='list-info-driver'>
                                                        <h3>Full Name</h3>
                                                        <span>{user.firstname} {user.lastname}</span>
                                                    </div>

                                                    <div className='list-info-driver'>
                                                        <h3>Birthday</h3>
                                                        <span>{dataDriver.birthday}</span>
                                                    </div>

                                                    <div className='list-info-driver'>
                                                        <h3>Address</h3>
                                                        <span>{dataDriver.address}</span>
                                                    </div>

                                                    <div className='list-info-driver'>
                                                        <h3>Company</h3>
                                                        <span>{dataDriver.company}</span>
                                                    </div>
                                                    <h3 style={{borderBottom: '1px solid #ccc'}}>Car Information:</h3>

                                                    <div className='list-info-driver'>
                                                        <h3>Car Model</h3>
                                                        <span>{item.model}</span>
                                                    </div>

                                                    <div className='list-info-driver'>
                                                        <h3>Manufacturing Year</h3>
                                                        <span>{item.manufacturingYear}</span>
                                                    </div>

                                                    <div className='list-info-driver'>
                                                        <h3>License Plate</h3>
                                                        <span>{item.licensePlate}</span>
                                                    </div>

                                                    <div className='list-info-driver'>
                                                        <h3>Number Of Seats</h3>
                                                        <span>{item.numberOfSeats}</span>
                                                    </div>
                                                </div>
                                            </List.Item>
                                        )}
                                    /> : null}

                                    {dataDriver.noProfile && <div>
                                        <Button>Create profile</Button>
                                    </div>}
                                </Card>
                            </Col>
                            <Col span={16}>
                                <Card title="Create Trip" bordered={true} style={{width: '100%'}}>
                                    <Form onSubmit={this.onSubmit.bind(this)}>
                                        <Row gutter={16}>
                                            <Col span={24}>
                                                <Form.Item label="Location Form">
                                                    {getFieldDecorator('Location From', {initialValue: this.state.locationFrom}, {
                                                        rules: [{
                                                            required: true,
                                                            message: 'Please input location from!'
                                                        }],
                                                    })(
                                                        <Input
                                                            prefix={<Icon type="environment"
                                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            // value={this.state.locationFrom}
                                                            name='locationFrom'
                                                            onChange={this.handleChange.bind(this)}
                                                        />,
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item label="Location To">
                                                    {getFieldDecorator('Location To', {initialValue: this.state.locationTo}, {
                                                        rules: [{required: true, message: 'Please input location to!'}],
                                                    })(
                                                        <Input
                                                            prefix={<Icon type="environment"
                                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            // value={this.state.locationTo}
                                                            name='locationTo'
                                                            onChange={this.handleChange.bind(this)}
                                                        />,
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item label="Start Time">
                                                    {getFieldDecorator('Start Time', {initialValue: this.state.startTime}, {
                                                        rules: [{required: true, message: 'Please input location to!'}],
                                                    })(
                                                        <Input
                                                            prefix={<Icon type="calendar"
                                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            // value={this.state.startTime}
                                                            name='startTime'
                                                            onChange={this.handleChange.bind(this)}
                                                        />,
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item label="End Time">
                                                    {getFieldDecorator('End Time', {initialValue: this.state.endTime}, {
                                                        rules: [{required: true, message: 'Please input location to!'}],
                                                    })(
                                                        <Input
                                                            prefix={<Icon type="calendar"
                                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            // value={this.state.endTime}
                                                            name='endTime'
                                                            onChange={this.handleChange.bind(this)}
                                                        />,
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item label="Available Seats">
                                                    {getFieldDecorator('Available Seats', {initialValue: this.state.availableSeats}, {
                                                        rules: [{required: true, message: 'Please input location to!'}],
                                                    })(
                                                        <Input
                                                            prefix={<Icon type="skin"
                                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            // value={this.state.availableSeats}
                                                            name='availableSeats'
                                                            onChange={this.handleChange.bind(this)}
                                                        />,
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item label="Fee">
                                                    {getFieldDecorator('Fee', {initialValue: this.state.fee}, {
                                                        rules: [{required: true, message: 'Please input location to!'}],
                                                    })(
                                                        <Input
                                                            prefix={<Icon type="dollar"
                                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            // value={this.state.fee}
                                                            name='fee'
                                                            onChange={this.handleChange.bind(this)}
                                                        />,
                                                    )}
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={4}>
                                                <Form.Item>
                                                    {getFieldDecorator('Wifi', {
                                                        valuePropName: 'checked',
                                                        initialValue: this.state.wifi,
                                                    })(<Checkbox name='wifi'
                                                                 onChange={this.handleChangeCheck.bind(this)}>Wifi</Checkbox>)}
                                                </Form.Item>
                                            </Col>
                                            <Col span={4}>
                                                <Form.Item>
                                                    {getFieldDecorator('Music', {
                                                        valuePropName: 'check',
                                                        initialValue: false,
                                                    })(<Checkbox name='music'
                                                                 onChange={this.handleChangeCheck.bind(this)}>Music</Checkbox>)}
                                                </Form.Item>
                                            </Col>
                                            <Col span={4}>
                                                <Form.Item>
                                                    {getFieldDecorator('Pet', {
                                                        valuePropName: 'check',
                                                        initialValue: false,
                                                    })(<Checkbox name='pet'
                                                                 onChange={this.handleChangeCheck.bind(this)}>Pet</Checkbox>)}
                                                </Form.Item>
                                            </Col>
                                            <Col span={4}>
                                                <Form.Item>
                                                    {getFieldDecorator('Drink', {
                                                        valuePropName: 'check',
                                                        initialValue: false,
                                                    })(<Checkbox name='drink'
                                                                 onChange={this.handleChangeCheck.bind(this)}>Drink</Checkbox>)}
                                                </Form.Item>
                                            </Col>
                                            <Col span={4}>
                                                <Form.Item>
                                                    {getFieldDecorator('Food', {
                                                        valuePropName: 'check',
                                                        initialValue: false,
                                                    })(<Checkbox name='food'
                                                                 onChange={this.handleChangeCheck.bind(this)}>Food</Checkbox>)}
                                                </Form.Item>
                                            </Col>
                                            <Col span={4}>
                                                <Form.Item>
                                                    {getFieldDecorator('wetTowel', {
                                                        valuePropName: 'check',
                                                        initialValue: false,
                                                    })(<Checkbox name='wetTowel'
                                                                 onChange={this.handleChangeCheck.bind(this)}>Wet
                                                        Towel</Checkbox>)}
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Button type={"primary"} htmlType={"submit"}>Submit</Button>
                                        </Row>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}


function mapStateToProps(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    const getInfoDriver = state.getInfoDriver;
    return {
        user,
        users,
        getInfoDriver
    };
}

const WrappedNormalCreateRoute = Form.create({name: 'create-route'})(CreateRouteScene);
const connectCreateRoute = connect(mapStateToProps)(WrappedNormalCreateRoute);

export default connectCreateRoute;
