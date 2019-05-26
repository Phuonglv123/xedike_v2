import React, {Component} from 'react';
import {Card, Col, Modal, Row} from "antd";
import PassengerAccount from "./PassengerAccount";
import DriverAccount from "./DriverAccount";

const {Meta} = Card;

class RegisterComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeAccount: false,
            isType: 'passenger'
        }
    }

    renderTypeAccount() {
        if (this.state.isType === 'passenger') {
            return <PassengerAccount onClose={this.props.onClose}/>
        } else if (this.state.isType === 'driver') {
            return <DriverAccount onClose={this.props.onClose}/>
        }
    }

    render() {
        return (
            <Modal visible={true} onCancel={this.props.onClose} footer={null} width="40%">
                {this.state.typeAccount ? this.renderTypeAccount() : <div id='registerComponent'>
                    <div className='header-register'>
                        <h4>Do you want to register with?</h4>
                        <span>You have account? <span>Login</span></span>
                    </div>
                    <div className='choose-register'>
                        <Row gutter={32}>
                            <Col span={12}>
                                <Card
                                    onClick={() => {
                                        this.setState({typeAccount: true, isType: 'passenger'})
                                    }}
                                    hoverable
                                    style={{width: '100%', padding: '40px'}}
                                    cover={<img style={{width: '100%'}} alt="example"
                                                src={require('../../ultils/images/img_signup_passenger.png')}/>}
                                >
                                    <Meta style={{textAlign: 'center'}} title="Passenger"/>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    onClick={() => {
                                        this.setState({typeAccount: true, isType: 'driver'})
                                    }}
                                    hoverable
                                    style={{width: '100%', padding: '40px'}}
                                    cover={<img style={{width: '100%'}} alt="example"
                                                src={require('../../ultils/images/img_signup_driver.png')}/>}
                                >
                                    <Meta style={{textAlign: 'center'}} title="Driver"/>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>}
            </Modal>
        );
    }
}

export default RegisterComponents;
