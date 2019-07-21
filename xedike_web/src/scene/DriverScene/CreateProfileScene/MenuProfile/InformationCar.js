import React, {Component} from 'react';
import {Card, Col, Input, Row, Select, Button, Form, Descriptions} from "antd";
import {connect} from "react-redux";
import usersService from "../../../../service/usersService";

const {Option} = Select;

class InformationCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDriver: [],
            onCreate: false,
            error: '',

            gender: '',
            birthday: '',
            address: '',
            passportID: '',
            registerDate: '',
            numberOfTrips: '',
            modelCar: '',
            manufacturingYearCar: '',
            licensePlateCar: '',
            numberOfSeatsCar: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let id = this.props.user.user._id;
        let res = await usersService.getDetailsDriver(id);
        this.setState({
            dataDriver: res,
            error: res.noProfile,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {
            gender, birthday, address,
            passportID, registerDate, numberOfTrips,
            modelCar, manufacturingYearCar, licensePlateCar, numberOfSeatsCar
        } = this.state;
        await usersService.createInfoDriver({
            gender,
            birthday,
            address,
            passportID,
            registerDate,
            numberOfSeatsCar,
            numberOfTrips,
            modelCar,
            manufacturingYearCar,
            licensePlateCar
        })

    };

    render() {
        const infoDriver = this.state.dataDriver;
        console.log(infoDriver);
        return (
            <div>
                {this.state.error ? <div>
                    {infoDriver.noProfile}
                    <Button onClick={() => {
                        this.setState({onCreate: true})
                    }}>Create Profile</Button>
                </div> : <div>
                    <Card bordered={true}>
                        <Descriptions title="User Info">
                            <Descriptions.Item label="Gender">{infoDriver.gender}</Descriptions.Item>
                            <Descriptions.Item label="Telephone">{infoDriver.birthday}</Descriptions.Item>
                            <Descriptions.Item label="Live">{infoDriver.address}</Descriptions.Item>
                            <Descriptions.Item label="Remark">{infoDriver.passportID}</Descriptions.Item>
                            <Descriptions.Item label="Address">{infoDriver.registerDate}</Descriptions.Item>
                            <Descriptions.Item label="Address">{infoDriver.numberOfSeatsCar}</Descriptions.Item>
                            <Descriptions.Item label="Address">{infoDriver.numberOfTrips}</Descriptions.Item>
                            <Descriptions.Item label="Address">{infoDriver.modelCar}</Descriptions.Item>
                            <Descriptions.Item label="Address">{infoDriver.manufacturingYearCar}</Descriptions.Item>
                            <Descriptions.Item label="Address">{infoDriver.licensePlateCar}</Descriptions.Item>
                        </Descriptions>
                    </Card>
                </div>
                }

                {this.state.onCreate ? <Card>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row gutter={32} style={{lineHeight: 3}}>
                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Gender:</label>
                                    <Input name='gender' onChange={this.onChange.bind(this)}
                                           value={this.state.gender}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Birthday:</label>
                                    <Input name='birthday' onChange={this.onChange.bind(this)}
                                           value={this.state.birthday}/>
                                </div>
                            </Col>

                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Address:</label>
                                    <Input value={this.state.address} name='address'
                                           onChange={this.onChange.bind(this)}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Passport ID:</label>
                                    <Input value={this.state.passportID} name='passportID'
                                           onChange={this.onChange.bind(this)}/>
                                </div>
                            </Col>

                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Register Date:</label>
                                    <Input value={this.state.registerDate} name='registerDate'
                                           onChange={this.onChange.bind(this)}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Number Of Trips:</label>
                                    <Input value={this.state.numberOfTrips} name='numberOfTrips'
                                           onChange={this.onChange.bind(this)}/>
                                </div>
                            </Col>

                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Model Car:</label>
                                    <Input value={this.state.modelCar} name='modelCar'
                                           onChange={this.onChange.bind(this)}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Manufacturing Year:</label>
                                    <Input value={this.state.manufacturingYearCar} name='manufacturingYearCar'
                                           onChange={this.onChange.bind(this)}/>
                                </div>
                            </Col>

                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">License Plate:</label>
                                    <Input value={this.state.licensePlateCar} name='licensePlateCar'
                                           onChange={this.onChange.bind(this)}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <label htmlFor="label">Number of seats:</label>
                                    <Input value={this.state.numberOfSeatsCar} name='numberOfSeatsCar'
                                           onChange={this.onChange.bind(this)}/>
                                </div>
                            </Col>

                            <Col span={24}>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card> : null}

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

