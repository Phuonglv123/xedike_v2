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
        const accountType = localStorage.getItem('accountType')
        return (
            <Header style={{background: "#095aa9"}}>
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
                    {user ? <Menu
                        style={{background: "#095aa9", lineHeight: '64px'}}
                        mode="horizontal"
                    >
                        <Menu.Item key="Home">
                            <Link to='/'>
                                Home
                            </Link>
                        </Menu.Item>
                        {accountType === 'passenger' ?
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
                                    <Link to={AppUrl.profileDriver()}>
                                        <Icon type='user'/>
                                        <span>My profile</span>
                                    </Link>
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
                        style={{background: "#095aa9", lineHeight: '64px'}}
                        mode="horizontal"
                    >
                        <Menu.Item key="Home">
                            <Link to='/'>
                                Home
                            </Link>
                        </Menu.Item>
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
