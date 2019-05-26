import React, {Component} from 'react';
import {Button, Checkbox, Col, Form, Icon, Input, Row} from "antd";
import {userActions} from "../../actions/userActions";
import {connect} from "react-redux";

class DriverAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driver: {
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                confirmedpassword: '',
                phone: '',
                birthday: '',


            },
            submitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {driver} = this.state;
        this.setState({
            driver: {
                ...driver,
                [name]: value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                this.setState({submitted: true});
                const {driver} = this.state;
                const {dispatch} = this.props;
                if (driver.firstname && driver.lastname && driver.username && driver.password && driver.confirmedpassword && driver.phone && driver.birthday) {
                    dispatch(userActions.registerDriver(driver));
                    this.props.onClose();
                }
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {driver} = this.state;

        return (
            <div id='loginComponent'>
                <div className='header-login'>
                    <h4>Register driver account</h4>
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
                                        placeholder="Username" name="username" value={driver.username}
                                        onChange={this.handleChange}/>
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
                                        value={driver.password}
                                        onChange={this.handleChange}
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
                                        value={driver.confirmedpassword}
                                        onChange={this.handleChange}
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
                                                value={driver.firstname}
                                                onChange={this.handleChange}
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
                                                value={driver.lastname}
                                                onChange={this.handleChange}
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
                                                value={driver.phone}
                                                onChange={this.handleChange}
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
                                                value={driver.birthday}
                                                onChange={this.handleChange}
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
                                Register Driver
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const {registering} = state.registration;
    return {
        registering
    };
}

export const registerDriver = Form.create({})(DriverAccount);
const connectedDriver = connect(mapStateToProps)(registerDriver);
export default connectedDriver;
