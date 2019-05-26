import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {history} from '../../helpers/history';
import {alertActions} from '../../actions/alertActions';
import {Layout, Menu} from 'antd';
import LoginComponents from '../LoginComponents/LoginComponents';
import RegisterComponents from "../RegisterComponents/RegisterComponents";
import {userActions} from "../../actions/userActions";
import {userService} from "../../service/usersService";
import AppUrl from "./AppUrl";
import HomeScene from "../../scene/HomeScene/HomeScene";

const {Header, Content} = Layout;

class AppRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signin: false,
            signup: false

        }

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    onLogOut = e => {
        userService.logout();
        window.location.reload();
    }

    render() {
        console.log(this.props.user)
        return (
            <Layout className="layout" id='components-layout-demo-top'>
                <Header>
                    <div className="logo">
                        <h2>Share Car</h2>
                    </div>
                    {this.props.user ? <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['Home']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="Home">Home</Menu.Item>
                        <Menu.Item key="Logout" onClick={this.onLogOut.bind(this)}>Log out</Menu.Item>
                    </Menu> : <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['Home']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2" onClick={() => {
                            this.setState({signin: !this.state.signin})
                        }}>sign in</Menu.Item>
                        <Menu.Item key="3" onClick={() => {
                            this.setState({signup: !this.state.signup})
                        }}>sign up</Menu.Item>
                    </Menu>}

                </Header>
                <Content>
                    <div style={{background: '#fff', minHeight: '100vh'}}>
                        <Router>
                            <Switch>
                                <Route exact path={AppUrl.home()} component={HomeScene}/>
                            </Switch>
                        </Router>
                    </div>
                    {this.state.signin ? <LoginComponents onClose={() => {
                        this.setState({signin: !this.state.signin})
                    }}/> : null}
                    {this.state.signup ? <RegisterComponents onClose={() => {
                        this.setState({signup: !this.state.signup})
                    }}/> : null}
                </Content>
            </Layout>

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

const connectedApp = connect(mapStateToProps)(AppRoute);
export default connectedApp