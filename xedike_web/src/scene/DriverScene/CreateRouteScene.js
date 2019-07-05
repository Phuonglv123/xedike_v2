import React, {Component} from 'react';
import {Card, Col, Form, Input, Row, Checkbox} from "antd";

class CreateRouteScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wifi: false,
            food: false,
            drink: false,
            music: false,
            pet: false,
            wetTowel: false
        }
    }

    handleChangeCheck = e => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    render() {
        console.log(this.state.wifi)
        return (
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Information Driver" bordered={false} style={{width: 300}}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={16}>
                    <Card title="Create Trip" bordered={false} style={{width: 300}}>
                        <Form>
                            <Row>
                                <Col span={8}>
                                    <Form.Item label="Location Form">
                                        <Input value={this.state.locationGetIn}
                                               name='locationGetIn'
                                               onChange={this.handleChange.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Location To">
                                        <Input value={this.state.locationGetIn}
                                               name='locationGetIn'
                                               onChange={this.handleChange.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Start Time">
                                        <Input value={this.state.locationGetIn}
                                               name='locationGetIn'
                                               onChange={this.handleChange.bind(this)}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <Form.Item label="Available Seats">
                                        <Input value={this.state.locationGetIn}
                                               name='locationGetIn'
                                               onChange={this.handleChange.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Fee">
                                        <Input value={this.state.locationGetIn}
                                               name='locationGetIn'
                                               onChange={this.handleChange.bind(this)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="End Time">
                                        <Input value={this.state.locationGetIn}
                                               name='locationGetIn'
                                               onChange={this.handleChange.bind(this)}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={4}>
                                    <Checkbox name='wifi' onChange={this.handleChangeCheck.bind(this)}>Wifi</Checkbox>
                                </Col>
                                <Col span={4}>
                                    <Checkbox name='music' onChange={this.handleChangeCheck.bind(this)}>Music</Checkbox>
                                </Col>
                                <Col span={4}>
                                    <Checkbox name='pet' onChange={this.handleChangeCheck.bind(this)}>Pet</Checkbox>
                                </Col>
                                <Col span={4}>
                                    <Checkbox name='drink' onChange={this.handleChangeCheck.bind(this)}>Drink</Checkbox>
                                </Col>
                                <Col span={4}>
                                    <Checkbox name='food' onChange={this.handleChangeCheck.bind(this)}>Food</Checkbox>
                                </Col>
                                <Col span={4}>
                                    <Checkbox name='wetTowel' onChange={this.handleChangeCheck.bind(this)}>Wet Towel</Checkbox>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default CreateRouteScene;
