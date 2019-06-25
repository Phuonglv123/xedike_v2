import React, {Component} from 'react';
import {Button, Col, DatePicker, Form, Icon, Input, Row} from "antd";
import AppUrl from "../appRoute/AppUrl";

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
            [e.target.id]: e.target.value
        })
    };

    render() {
        return (
            <Form>
                <Row gutter={8}>
                    <Col span={16}>
                        <Row gutter={8}>
                            <Col span={11}>
                                <div>
                                    <Input size="large" placeholder="large size"
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
                                    <Input size="large" placeholder="large size"
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

export default SearchComponent;