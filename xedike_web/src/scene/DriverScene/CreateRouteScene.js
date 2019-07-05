import React, {Component} from 'react';
import {Card, Col, Form, Input, Row, Checkbox, Button} from "antd";
import tripsService from "../../service/tripsService";

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

            data: []
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


    render() {
        console.log(this.state.data)
        return (
            <div style={{width: '80%', margin: '0 auto'}}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Information Driver" bordered={false} style={{width: '100%'}}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card title="Create Trip" bordered={false} style={{width: '100%'}}>
                            <Form onSubmit={this.onSubmit.bind(this)}>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Form.Item label="Location Form">
                                            <Input value={this.state.locationFrom}
                                                   name='locationFrom'
                                                   onChange={this.handleChange.bind(this)}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label="Location To">
                                            <Input value={this.state.locationTo}
                                                   name='locationTo'
                                                   onChange={this.handleChange.bind(this)}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label="Start Time">
                                            <Input value={this.state.startTime}
                                                   name='startTime'
                                                   onChange={this.handleChange.bind(this)}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Form.Item label="Available Seats">
                                            <Input value={this.state.availableSeats}
                                                   name='availableSeats'
                                                   onChange={this.handleChange.bind(this)}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label="Fee">
                                            <Input value={this.state.fee}
                                                   name='fee'
                                                   onChange={this.handleChange.bind(this)}/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item label="End Time">
                                            <Input value={this.state.endTime}
                                                   name='endTime'
                                                   onChange={this.handleChange.bind(this)}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={4}>
                                        <Checkbox name='wifi'
                                                  onChange={this.handleChangeCheck.bind(this)}>Wifi</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox name='music'
                                                  onChange={this.handleChangeCheck.bind(this)}>Music</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox name='pet' onChange={this.handleChangeCheck.bind(this)}>Pet</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox name='drink'
                                                  onChange={this.handleChangeCheck.bind(this)}>Drink</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox name='food'
                                                  onChange={this.handleChangeCheck.bind(this)}>Food</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox name='wetTowel' onChange={this.handleChangeCheck.bind(this)}>Wet
                                            Towel</Checkbox>
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
        );
    }
}

export default CreateRouteScene;
