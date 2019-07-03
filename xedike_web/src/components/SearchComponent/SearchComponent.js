import React, {Component} from 'react';
import {Button, Col, DatePicker, Form, Icon, Row, Select} from "antd";
import {tripActions} from "../../actions/tripActions";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import AppUrl from "../appRoute/AppUrl";
import dataProvince from './dataProvince';

const {Option} = Select;

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.lastFetchId = 0;
        this.state = {
            locationFrom: null,
            locationTo: null,
        }
    }

    handleChangeFrom = e => {
        this.setState({
            locationFrom: e
        })
    };

    handleChangeTo = e => {
        this.setState({
            locationTo: e
        })
    };

    handleChangeFormTo = () => {
        this.setState({
            locationFrom: this.state.locationTo,
            locationTo: this.state.locationFrom
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {locationFrom, locationTo} = this.state;
        const {dispatch} = this.props;
        if (locationFrom && locationTo) {
            dispatch(tripActions.searchRoutes(locationFrom, locationTo));
            this.props.history.push(AppUrl.searchRoute());
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
                                    {/*<Input size={"large"} placeholder="large size" name='locationFrom'*/}
                                    {/*       onChange={this.handleChange.bind(this)}/>*/}
                                    <Select
                                        suffixIcon={<Icon type="environment"/>}
                                        size={"large"}
                                        showSearch
                                        style={{width: '100%'}}
                                        // value={this.state.locationFrom ? this.state.locationFrom :
                                        //     <span style={{color: '#ccc'}}>From</span>}
                                        placeholder='From'
                                        optionFilterProp="children"
                                        onChange={this.handleChangeFrom.bind(this)}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {dataProvince.map(i => <Option key={i.key}
                                                                       value={i.label}>{i.label}</Option>)}
                                    </Select>
                                </div>
                            </Col>
                            <Col span={2}>
                                <Button onClick={this.handleChangeFormTo.bind(this)} type="primary"
                                        style={{width: "100%", height: 40}}>
                                    <Icon type="swap"/>
                                </Button>
                            </Col>
                            <Col span={11}>
                                <div>
                                    <Select
                                        suffixIcon={<Icon type="environment"/>}
                                        size={"large"}
                                        showSearch
                                        style={{width: '100%'}}
                                        // value={this.state.locationTo ? this.state.locationTo :
                                        //     <span style={{color: '#ccc'}}>To</span>}
                                        placeholder="To"
                                        optionFilterProp="children"
                                        onChange={this.handleChangeTo.bind(this)}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {dataProvince.map(i => <Option key={i.key}
                                                                       value={i.label}>{i.label}</Option>)}
                                    </Select>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Row gutter={8}>
                            <Col span={12}>
                                <div>
                                    <DatePicker size={"large"} style={{width: '100%'}}/>
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
export default withRouter(connectSearch);
