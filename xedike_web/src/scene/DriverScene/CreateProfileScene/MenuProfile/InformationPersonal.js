import React, {Component} from 'react';
import {Card, Col, Input, Row} from "antd";
import {connect} from "react-redux";

class InformationPersonal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const infoDriver = this.props.resultInfoDriver;
        return (
            <div>
                <Card>
                    <Row>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Gender:</label>
                                <Input value={infoDriver.gender}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Birthday:</label>
                                <Input value={infoDriver.birthday}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Address:</label>
                                <Input value={infoDriver.address}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Passport ID:</label>
                                <Input value={infoDriver.passportID}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Register Date:</label>
                                <Input value={infoDriver.registerDate}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Number Of Trips:</label>
                                <Input value={infoDriver.numberOfTrips}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Model Car:</label>
                                <Input value={infoDriver.carInfo.model}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Manufacturing Year:</label>
                                <Input value={infoDriver.carInfo.manufacturingYear}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">License Plate:</label>
                                <Input value={infoDriver.carInfo.licensePlate}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Number of seats:</label>
                                <Input value={infoDriver.carInfo.numberOfSeats}/>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {resultInfoDriver} = state.getInfoDriver;
    return {
        resultInfoDriver
    }
}

const connectInfoPersonal = connect(mapStateToProps)(InformationPersonal)
export default connectInfoPersonal;
