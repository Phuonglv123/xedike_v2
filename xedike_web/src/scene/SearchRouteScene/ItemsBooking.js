import React, {Component} from 'react';
import {Button, Card, Col, Form, Input, Row, Select} from "antd";
import './ItemsBooking.css';
import {connect} from "react-redux";
import TripsService from "../../service/tripsService";

const {Option} = Select;

class ItemsBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationGetIn: null,
            locationGetOff: null,
            paymentMethod: null,
            notes: null,
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getBookTrip = async (e) => {
        e.preventDefault();
        const id_passenger = this.props.user.payload.id;
        const id_trip = this.props.data;
        let res = await TripsService.bookTripId(id_trip, {
            accountID: id_passenger,
            locationGetIn: this.state.locationGetIn,
            locationGetOff: this.state.locationGetOff,
            paymentMethod: this.state.paymentMethod,
            notes: this.state.notes,
        });
        console.log(res)
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const user = this.props.user;
        return (
            <div className='bck-itemBooking'>
                <div>
                    <Form onSubmit={this.getBookTrip}>
                        <Row>
                            <Col span={8}>
                                <Card title="Information Driver" style={{width: '100%'}}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card title="Information Customer" style={{width: '100%'}}>
                                    <Form.Item label='Full name: '>
                                        {getFieldDecorator('Full name', {
                                            rules: [{
                                                required: true,
                                                message: 'Please input full name!'
                                            }],
                                        })(<Input
                                            value={user ? user.user.firstname + '' + user.user.lastname : null}/>)}
                                    </Form.Item>
                                    <Form.Item label='Phone number: '>
                                        {getFieldDecorator('Phone number', {
                                            rules: [{
                                                required: true,
                                                message: 'Please input phone number!'
                                            }],
                                        })(<Input value={user ? user.user.phone : null}/>)}
                                    </Form.Item>
                                    <Form.Item label='Email: '>
                                        {getFieldDecorator('Email', {
                                            rules: [{
                                                required: true,
                                                message: 'Please input email'
                                            }],
                                        })(<Input placeholder='Enter Email'/>)}
                                    </Form.Item>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card title="Select From/To" style={{width: '100%'}}>
                                    <Form.Item label="Location Form">
                                        {getFieldDecorator('Location Form', {
                                            rules: [{
                                                required: true,
                                                message: 'Please input your location Form to driver take you!'
                                            }],
                                        })(<Input value={this.state.locationGetIn} name='locationGetIn'
                                                  onChange={this.handleChange.bind(this)}/>)}
                                    </Form.Item>
                                    <Form.Item label="Location To">
                                        {getFieldDecorator('Location To', {
                                            rules: [{required: true, message: 'Please select your location to!'}],
                                        })(<Input onChange={this.handleChange.bind(this)} name='locationGetOff'
                                                  value={this.state.locationGetOff}/>)}
                                    </Form.Item>
                                    <Form.Item label='Note: '>
                                        <Input placeholder='Enter Note' value={this.state.notes} name='notes'
                                               onChange={this.handleChange.bind(this)}/>
                                    </Form.Item>
                                    <Form.Item label="Payment method">
                                        {getFieldDecorator('gender', {
                                            rules: [{required: true, message: 'Please select your gender!'}],
                                        })(
                                            <Select
                                                placeholder="Select a option and change input text above"
                                                onChange={(e) => {
                                                    this.setState({paymentMethod: e})
                                                }}
                                            >
                                                <Option value='cash'>Cash</Option>
                                                <Option value="internetBanking">Internet Banking</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Button htmlType='submit' type='primary'>
                                Booking
                            </Button>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users, authentication, searchTrip} = state;
    const {user} = authentication;
    const {resultSearch} = searchTrip;
    return {
        users,
        user,
        resultSearch,
    }

}

const createFrom = Form.create({name: 'FormBooking'})(ItemsBooking);
const connectItemBooking = connect(mapStateToProps)(createFrom)

export default connectItemBooking;
