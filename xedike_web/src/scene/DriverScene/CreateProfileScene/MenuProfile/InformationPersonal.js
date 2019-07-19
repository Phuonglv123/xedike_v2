import React, {Component} from 'react';
import {Card, Col, Input, Row} from "antd";
import {connect} from "react-redux";

class InformationPersonal extends Component {
    render() {
        const user = this.props.user.user
        return (
            <div>
                <Card>
                    <Row gutter={32} style={{lineHeight: 3}}>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">First name:</label>
                                <Input value={user.firstname}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Last Name:</label>
                                <Input value={user.lastname}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Phone number:</label>
                                <Input value={user.phone}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Status:</label>
                                <Input value={user.accountType}/>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
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

const connectInfoPreson = connect(mapStateToProps)(InformationPersonal)

export default connectInfoPreson;
