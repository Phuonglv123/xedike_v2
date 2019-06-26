import React, {Component} from 'react';
import {Button, Col, DatePicker, Form, Icon, Input, Row} from "antd";
import AppUrl from "../appRoute/AppUrl";
import TripsService from '../../service/tripsService';
import {userActions} from "../../actions/userActions";
import {tripActions} from "../../actions/tripActions";
import {connect} from "react-redux";

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationFrom: '',
            locationTo: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {locationFrom, locationTo} = this.state;
        const {dispatch} = this.props;
        if (locationFrom && locationTo) {
            dispatch(tripActions.searchRoutes(locationFrom, locationTo));
            debugger
        }
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Row gutter={8}>
                    <Col span={16}>
                        <Row gutter={8}>
                            <Col span={11}>
                                <div>
                                    <Input size={"large"} placeholder="large size" name='locationFrom'
                                           onChange={this.handleChange.bind(this)}/>
                                </div>
                            </Col>
                            <Col span={2}>
                                <Button type="primary" style={{width: "100%", height: 40}}>
                                    <Icon type="swap"/>
                                </Button>
                            </Col>
                            <Col span={11}>
                                <div>
                                    <Input size={"large"} placeholder="large size" name='locationTo'
                                           onChange={this.handleChange.bind(this)}/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Row gutter={8}>
                            <Col span={12}>
                                <div>
                                    <DatePicker size={"large"}/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <Button type="primary" block htmlType="submit"
                                        style={{paddingTop: "10px", paddingBottom: "26px"}}>
                                    Search route
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    const searching = state.searchTrip;
    return {
        searching
    };
}

const connectSearch = connect(mapStateToProps)(SearchComponent);
export default connectSearch;
