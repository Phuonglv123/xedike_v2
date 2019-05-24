import React, {Component} from 'react';
import {Button, Checkbox, Col, Form, Icon, Input, Row} from "antd";

class PassengerAccount extends Component {

    constructor(props) {
        super(props);

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id='loginComponent'>
                <div className='header-login'>
                    <h4>Register passenger account</h4>
                    <span>You have account? <span>Login</span></span>
                </div>
                <div id='components-form-demo-normal-login'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <div className="label-account">
                                    <span>UserName</span>
                                    <Input
                                        prefix={<Icon type="user"
                                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Username" name="username"/>
                                </div>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <div className="label-account">
                                    <span>Password</span>
                                    <Input
                                        prefix={<Icon type="lock"
                                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password" placeholder="Password" name="password"
                                    />
                                </div>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <div className="label-account">
                                    <span>Re-Password</span>
                                    <Input
                                        prefix={<Icon type="lock"
                                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password" placeholder="Re-Password" name="confirmedpassword"
                                    />
                                </div>
                            )}
                        </Form.Item>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item>
                                    {getFieldDecorator('First Name', {
                                        rules: [{required: true, message: 'Please input your first name!'}],
                                    })(
                                        <div className="label-account">
                                            <span>First Name:</span>
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="text" placeholder="first name" name="firstname"
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item>
                                    {getFieldDecorator('Last Name', {
                                        rules: [{required: true, message: 'Please input your Last Name!'}],
                                    })(
                                        <div className="label-account">
                                            <span>Last Name:</span>
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="text" placeholder="Last Name" name="lastname"
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={16}>
                                <Form.Item>
                                    {getFieldDecorator('Phone Number', {
                                        rules: [{required: true, message: 'Please input your Phone Number!'}],
                                    })(
                                        <div className="label-account">
                                            <span>Phone Number:</span>
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="text" placeholder="Phone Number" name="phone"
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item>
                                    {getFieldDecorator('BirthDay', {
                                        rules: [{required: true, message: 'Please input your BirthDay!'}],
                                    })(
                                        <div className="label-account">
                                            <span>BirthDay:</span>
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="text" placeholder="BirthDay" name="birthday"
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="sad">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register Passenger
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default PassengerAccount;
