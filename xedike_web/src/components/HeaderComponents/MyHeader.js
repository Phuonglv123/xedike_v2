import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AppUrl from "../appRoute/AppUrl";
import {Avatar, Dropdown, Icon, Layout, Menu} from "antd";
import LoginComponents from "../LoginComponents/LoginComponents";
import RegisterComponents from "../RegisterComponents/RegisterComponents";
import {connect} from "react-redux";
import "./myHeader.css";
import Auth from "../../service/api/Auth";

const {Header} = Layout;

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: false,
            signUp: false

        }
    }


    onLogOut = () => {
        Auth.logOut();
        window.location.reload();
    };

    render() {
        const user = this.props.user;
        console.log(localStorage.getItem('accountType') === 'driver' ? 1 : 2)
        return (
            <Header style={{background: "rgb(24, 144, 255)"}}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '70%',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }}>
                    <Link to={AppUrl.home()}>
                        <div className="logo">
                            <h1>Share Car</h1>
                        </div>
                    </Link>
                    {this.props.user ? <Menu
                        style={{background: "rgb(24, 144, 255)", lineHeight: '64px'}}
                        mode="horizontal"
                    >
                        <Menu.Item key="Home">Home</Menu.Item>
                        {user && user.user.accountType === 'passenger' ?
                            <Menu.Item key="my_route">My Route</Menu.Item> :
                            <Menu.Item key="registerTrip">
                                <Link to={AppUrl.createRoute()}>Trip register</Link>
                            </Menu.Item>}
                        <Menu.Item key="Logout">
                            <Dropdown overlay={<Menu>
                                <Menu.Item key="0">
                                    <div>
                                        <h3>{user.user.firstname + ' ' + user.user.lastname}</h3>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="1">
                                    <Icon type='user'/>
                                    <span>My profile</span>
                                </Menu.Item>
                                <Menu.Divider/>
                                <Menu.Item key="3" onClick={this.onLogOut.bind(this)}>Log out</Menu.Item>
                            </Menu>} trigger={['click']}>
                                <a className="ant-dropdown-link" href="/">
                                    <Avatar size="large" icon="user"/>
                                </a>
                            </Dropdown>
                        </Menu.Item>
                    </Menu> : <Menu
                        style={{background: "rgb(24, 144, 255)", lineHeight: '64px'}}
                        mode="horizontal"
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="list_route">List Route</Menu.Item>
                        <Menu.Item key="2" onClick={() => {
                            this.setState({signIn: !this.state.signIn})
                        }}>sign in</Menu.Item>
                        <Menu.Item key="3" onClick={() => {
                            this.setState({signUp: !this.state.signUp})
                        }}>sign up</Menu.Item>
                    </Menu>}
                </div>

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

function mapStateToProps(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {
        user,
        users
    };
}

const connectedApp = connect(mapStateToProps)(MyHeader);


export default connectedApp;
