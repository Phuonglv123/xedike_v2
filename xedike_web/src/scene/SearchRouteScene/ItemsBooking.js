import React, {Component} from 'react';
import {Row, Col, Card, Form, Input, Select} from "antd";
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


    getBookTrip = async (i) => {
        const id_passenger = this.props.user.payload.id;
        let res = await TripsService.bookTripId(i, {
            accountID: id_passenger,
            locationGetIn: `${i.locationFrom}`,
            locationGetOff: `${i.locationTo}`,
            paymentMethod: "cash",
            notes: "test",
        });
        console.log(res)
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const user = this.props.user;
        console.log(user)
        return (
            <div className='bck-itemBooking'>
                <div>
                    <Form>
                        <Row>
                            <Col span={8}>
                                <Card title="Information Driver" style={{width: '100%'}}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Select From/To" style={{width: '100%'}}>
                                    <Form.Item label="Location Form">
                                        {getFieldDecorator('note', {
                                            rules: [{
                                                required: true,
                                                message: 'Please input your location Form to driver take you!'
                                            }],
                                        })(<Input value={this.state.locationGetIn}
                                                  onChange={this.handleChange.bind(this)}/>)}
                                    </Form.Item>
                                    <Form.Item label="Location To">
                                        {getFieldDecorator('gender', {
                                            rules: [{required: true, message: 'Please select your location to!'}],
                                        })(<Input onChange={this.handleChange.bind(this)} value={this.state.locationGetOff}/>)}
                                    </Form.Item>
                                    <Form.Item label="Gender">
                                        {getFieldDecorator('gender', {
                                            rules: [{required: true, message: 'Please select your gender!'}],
                                        })(
                                            <Select
                                                placeholder="Select a option and change input text above"
                                                onChange={this.handleSelectChange}
                                            >
                                                <Option value="cash">Cash</Option>
                                                <Option value="internetBanking">Internet Banking</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Information Customer" style={{width: '100%'}}>
                                    <Form.Item label='Full name: '>
                                        <Input value={user ? user.user.firstname + '' + user.user.lastname : null}/>
                                    </Form.Item>
                                    <Form.Item label='Phone number: '>
                                        <Input value={user ? user.user.phone : null}/>
                                    </Form.Item>
                                    <Form.Item label='Email: '>
                                        <Input placeholder='Enter Email'/>
                                    </Form.Item>
                                    <Form.Item label='Note: '>
                                        <Input placeholder='Enter Note'/>
                                    </Form.Item>
                                </Card>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {
        users,
        user,
    }

}

const createFrom = Form.create({name: 'FormBooking'})(ItemsBooking);
const connectItemBooking = connect(mapStateToProps)(createFrom)

export default connectItemBooking;
