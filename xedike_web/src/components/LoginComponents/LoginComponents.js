import React, {Component} from 'react';
import {Button, Checkbox, Form, Icon, Input, Modal} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userActions} from "../../actions/userActions";
import './LoginComponents.css';

class LoginComponents extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                this.setState({submitted: true});
                const {username, password} = this.state;
                const {dispatch} = this.props;
                if (username && password) {
                    dispatch(userActions.login(username, password));
                }
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {loggingIn} = this.props;
        const {username, password, submitted} = this.state;
        return (
            <Modal
                visible={true}
                onCancel={this.props.onClose}
                footer={null}
            >
                <div id='loginComponent'>
                    <div className='header-login'>
                        <h4>Login</h4>
                        <span>You haven't account? <span>Register</span></span>
                    </div>
                    <div className='text-errors'>
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
                                            name="username" value={username} onChange={this.handleChange}
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
                                            name="password" value={password} onChange={this.handleChange}
                                            prefix={<Icon type="lock"
                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            type="password" placeholder="Password" name="password"/>
                                    </div>
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="sad">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {
        loggingIn
    };
}

export const LoginPassenger = Form.create({})(LoginComponents);
const connectedLoginPage = connect(mapStateToProps)(LoginPassenger);
export default connectedLoginPage;
