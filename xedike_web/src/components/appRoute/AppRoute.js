import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../../helpers/history';
import {alertActions} from '../../actions/alertActions';
import {PrivateRoute} from './PrivateRoute';
import HomeScene from "../../scene/HomeScene/HomeScene";
import {Layout, Menu, Breadcrumb} from 'antd';
import LoginComponents from '../LoginComponents/LoginComponents';

const {Header, Content, Footer} = Layout;

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

    render() {
        const {alert} = this.props;
        return (
            <Layout className="layout" id='components-layout-demo-top'>
                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2" onClick={() => {
                            this.setState({signin: !this.state.signin})
                        }}>sign in</Menu.Item>
                        <Menu.Item key="3">sign up</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>Content</div>
                    {this.state.signin ? <LoginComponents onClose={() => {
                        this.setState({signin: !this.state.signin})
                    }}/> : null}
                </Content>
            </Layout>

        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(AppRoute);
export default connectedApp


{/*<div className="jumbotron">*/
}
{/*    <div className="container">*/
}
{/*        <div className="col-sm-8 col-sm-offset-2">*/
}
{/*            {alert.message &&*/
}
{/*            <div className={`alert ${alert.type}`}>{alert.message}</div>*/
}
{/*            }*/
}
{/*            <Router history={history}>*/
}
{/*                <div>*/
}
{/*                    <Route exact path="/" component={HomeScene}/>*/
}
{/*                </div>*/
}
{/*            </Router>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*</div>*/
}
