import React, {Component} from 'react';
import {Card, Col, Input, Row} from "antd";

class InformationCar extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Row>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">First name:</label>
                                <Input placeholder="Name"/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Last Name:</label>
                                <Input placeholder="Name"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Phone number:</label>
                                <Input placeholder="Name"/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Status:</label>
                                <Input placeholder="Name"/>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default InformationCar;
