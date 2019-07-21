import React, {Component} from 'react';
import {Button, Card, Checkbox, Col, Form, Icon, Input, Row} from "antd";
import tripsService from "../../../../service/tripsService";
import AppUrl from "../../../../components/appRoute/AppUrl";

class CreateTripsForDriver extends Component {
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

            stepCreateCurrent: false
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
        });
        this.props.push(AppUrl.home())
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
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
            </div>
        );
    }
}

const WrappedNormalCreateRoute = Form.create({name: 'create-route'})(CreateTripsForDriver);

export default WrappedNormalCreateRoute;
