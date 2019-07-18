import React, {Component} from 'react';
import {Card, Col, Input, Row, Select} from "antd";
import {connect} from "react-redux";
import usersService from "../../../../service/usersService";

const {Option} = Select;

class InformationCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDriver: []
        }
    }

    async componentDidMount() {
        let id = this.props.user.user._id;
        let res = await usersService.getDetailsDriver(id);
        this.setState({
            dataDriver: res
        });
    }

    render() {
        const infoDriver = this.state.dataDriver;
        return (
            <div>
                <Card>
                    <Row gutter={32} style={{lineHeight: 3}}>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Gender:</label>
                                <Select defaultValue={infoDriver.gender} style={{width: '100%'}}>
                                    <Option value={infoDriver.gender}>Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Birthday:</label>
                                <Input value={infoDriver.birthday}/>
                            </div>
                        </Col>

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

                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Model Car:</label>
                                <Input value={infoDriver.modelCar}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Manufacturing Year:</label>
                                <Input value={infoDriver.manufacturingYearCar}/>
                            </div>
                        </Col>

                        <Col span={12}>
                            <div>
                                <label htmlFor="label">License Plate:</label>
                                <Input value={infoDriver.licensePlateCar}/>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <label htmlFor="label">Number of seats:</label>
                                <Input value={infoDriver.numberOfSeatsCar}/>
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
        users,
    };
}

const connectInfoDriver = connect(mapStateToProps)(InformationCar)
export default connectInfoDriver;

