import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AppUrl from "../appRoute/AppUrl";
import {Menu, Layout} from "antd";
import LoginComponents from "../LoginComponents/LoginComponents";
import RegisterComponents from "../RegisterComponents/RegisterComponents";

const {Header} = Layout;

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: false,
            signUp: false

        }
    }

    render() {
        return (
            <Header>
                <Link to={AppUrl.home()}>
                    <div className="logo">
                        <h2>Share Car</h2>
                    </div>
                </Link>
                {this.props.user ? <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="Home">Home</Menu.Item>
                    <Menu.Item key="Logout" onClick={this.onLogOut.bind(this)}>Log out</Menu.Item>
                </Menu> : <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2" onClick={() => {
                        this.setState({signIn: !this.state.signIn})
                    }}>sign in</Menu.Item>
                    <Menu.Item key="3" onClick={() => {
                        this.setState({signUp: !this.state.signUp})
                    }}>sign up</Menu.Item>
                </Menu>}
                {this.state.signIn ? <LoginComponents onClose={() => {
                    this.setState({signIn: !this.state.signIn})
                }}/> : null}
                {this.state.signUp ? <RegisterComponents onClose={() => {
                    this.setState({signUp: !this.state.signUp})
                }}/> : null}
            </Header>
        );
    }
}

export default MyHeader;
