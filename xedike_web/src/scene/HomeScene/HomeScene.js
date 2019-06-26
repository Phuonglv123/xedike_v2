import React, {Component} from 'react';
import './HomeScene.css'
import {Button, Col, Divider, Input, Row, Tabs, List, Icon, DatePicker} from 'antd';
import axios from 'axios';
import BlockUI from "../../components/BlockUI/BlockUI";
import AppUrl from "../../components/appRoute/AppUrl";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

const {TabPane} = Tabs;

class HomeScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            radioValue: '',
            loading: false,
        }
    }


    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            radioValue: e.target.value,
        });
    };

    async componentDidMount() {
        this.setState({
            loading: true,
        })
        let res = await axios({
            method: 'get',
            url: 'https://secret-falls-56885.herokuapp.com/api/trip/allroute',
            responseType: 'stream'
        });
        this.setState({
            data: res.data,
            loading: false,
        });
    }

    render() {
        const {data} = this.state;
        return (
            <BlockUI blocking={this.state.loading}>
                {/*<div className='component-home'>*/}
                {/*    <div className="slider-body">*/}
                {/*        <img src={require("./../../ultils/images/banner-nguoi-1920x450.png")} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="home-search-ticket-panel">*/}
                {/*       <SearchComponent/>*/}
                {/*    </div>*/}
                {/*    <div className="home-list-route">*/}
                {/*        <div className="card-list-route">*/}
                {/*            <Tabs type="card">*/}
                {/*                <TabPane tab="All Route" key="1">*/}
                {/*                    <List*/}
                {/*                        header={null}*/}
                {/*                        footer={null}*/}

                {/*                        dataSource={data}*/}
                {/*                        renderItem={item => (*/}
                {/*                            <Col span={12}>*/}
                {/*                                <div className="list-route-item">*/}
                {/*                                    <div className="name-location">*/}
                {/*                                        <span>{item.locationFrom}</span>*/}
                {/*                                        <Icon className="icon-location" type="arrow-right"/>*/}
                {/*                                        <span>{item.locationTo}</span>*/}
                {/*                                    </div>*/}
                {/*                                    <div className="name-fee">*/}
                {/*                                        <span className="fee-ticket">{item.fee}.000 VND/ticket</span>*/}
                {/*                                        <Button style={{*/}
                {/*                                            backgroundColor: "#f8c13c",*/}
                {/*                                            color: "black",*/}
                {/*                                            fontSize: "14px",*/}
                {/*                                            fontWeight: "bold"*/}
                {/*                                        }} icon="car" size={28}>*/}
                {/*                                            Book Ticket*/}
                {/*                                        </Button>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </Col>*/}
                {/*                        )}*/}
                {/*                    />*/}
                {/*                </TabPane>*/}
                {/*                <TabPane tab="Hà Nội" key="2">*/}
                {/*                    <p>Content of Tab Pane 2</p>*/}
                {/*                    <p>Content of Tab Pane 2</p>*/}
                {/*                    <p>Content of Tab Pane 2</p>*/}
                {/*                </TabPane>*/}
                {/*                <TabPane tab="Đà Nẵng" key="3">*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                </TabPane>*/}
                {/*                <TabPane tab="Sài Gòn" key="4">*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                </TabPane>*/}
                {/*                <TabPane tab="Đà Nẵng" key="5">*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                    <p>Content of Tab Pane 3</p>*/}
                {/*                </TabPane>*/}
                {/*            </Tabs>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="take-care">*/}
                {/*        <div className="text-care">*/}
                {/*            <span>Bring safe your trips! Wish you good luck!</span>*/}
                {/*        </div>*/}
                {/*        <div className="card-take-care">*/}
                {/*            <div className="care-item">*/}
                {/*                <Icon type="border-outer" className="icon"/>*/}
                {/*                <div className="item">*/}
                {/*                    <span>5.000+</span>*/}
                {/*                    <span>My routes</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="care-item">*/}
                {/*                <Icon type="car" className="icon"/>*/}
                {/*                <div className="item">*/}
                {/*                    <span>2.000+</span>*/}
                {/*                    <span>My Driver</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="care-item">*/}
                {/*                <Icon type="idcard" className="icon"/>*/}
                {/*                <div className="item">*/}
                {/*                    <span>5.000+</span>*/}
                {/*                    <span>My Passenger</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="introduce-home">*/}
                {/*        <div className="text-animation">*/}
                {/*            <span className="animation-type">Share your route with everybody ! Happy </span>*/}
                {/*        </div>*/}
                {/*        <div className="card-intro">*/}
                {/*            <div className="background-intro"/>*/}
                {/*            <div className="bus-img">*/}
                {/*                <img src={require("../../ultils/images/banh-xe.gif")} alt=""/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
                <SearchComponent/>
            </BlockUI>
        );
    }
}

export default HomeScene;
