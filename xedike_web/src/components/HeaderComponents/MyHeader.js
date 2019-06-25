import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AppUrl from "../appRoute/AppUrl";
import {Menu, Layout} from "antd";
import LoginComponents from "../LoginComponents/LoginComponents";
import RegisterComponents from "../RegisterComponents/RegisterComponents";
import {connect} from "react-redux";
import {userService} from "../../service/usersService";
import {userActions} from "../../actions/userActions";
import "./myHeader.css";

const {Header} = Layout;

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: false,
            signUp: false

        }
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }


    onLogOut = () => {
        userService.logout();
        window.location.reload();
    };

    render() {
        return (
            <Header style={{background:"#096dd9"}}>
                <Link to={AppUrl.home()}>
                    <div className="logo">
                        <h2>Share Car</h2>
                    </div>
                </Link>
                {this.props.user ? <Menu
                    style={{background:"#096dd9", lineHeight: '64px'}}
                    mode="horizontal"
                >
                    <Menu.Item key="Home">Home</Menu.Item>
                    <Menu.Item key="Logout" onClick={this.onLogOut.bind(this)}>Log out</Menu.Item>
                </Menu> : <Menu
                    style={{background:"#096dd9",lineHeight: '64px'}}
                    mode="horizontal"
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
