import React, {Component} from 'react';
import './HomeScene.css'
import {Tabs, Icon, Radio, Row, Col, Input, Button, Card, Divider} from 'antd';
import axios from 'axios';


const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

class HomeScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            radioValue: ''
        }
    }


    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            radioValue: e.target.value,
        });
    };

    async componentDidMount() {
        let res = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/trip/allroute',
            responseType: 'stream'
        })
        this.setState({
            data: res.data
        });
        console.log(this.state.data[0].locationFrom)
    }

    renderRoute() {
        return this.state.data.map((i, index) => {
                return (
                    <Col span={12} key={index}>
                        <div>
                            <span>{i.locationFrom} </span>
                            <span>to</span>
                            <span> {i.locationTo}</span>
                        </div>
                        <div className='book-route'>
                            <div>
                                <span>20-20-2019</span>
                                <span>|</span>
                                <span>230 VND</span>
                            </div>
                            <div>
                                <Button type='primary' size='default'>Book now</Button>
                            </div>
                        </div>
                        <Divider dashed/>
                    </Col>
                )
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <div className='background-home'>

                    </div>
                    <div className='form-booking'>
                        <div className='background-top-form'>
                            <img src={require('../../ultils/images/bus.webp')} alt=""/>
                        </div>
                        <div className='tab-form-book'>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab={<h3><Icon type="car"/> Car</h3>} key="1">
                                    <div>
                                        <h4>Search car</h4>
                                        <RadioGroup onChange={this.onChange} value={this.state.radioValue}>
                                            <Radio value='oneway'>One way</Radio>
                                            <Radio value='roundtrip'>Round trip</Radio>
                                        </RadioGroup>
                                    </div>
                                    <div>
                                        <Row gutter={16}>
                                            <Col span={6}>
                                                <Input/>
                                            </Col>
                                            <Col span={1}><Button shape="circle" icon="swap"/></Col>
                                            <Col span={6}>
                                                <Input/>
                                            </Col>
                                            <Col span={4}>
                                                <Input/>
                                            </Col>
                                            <Col span={4}>
                                                <Input/>
                                            </Col>
                                            <Col span={3}>
                                                <Button type='primary' icon='send'>Seacrh</Button>
                                            </Col>
                                        </Row>
                                    </div>

                                </TabPane>
                                <TabPane tab={<h3><Icon type="home"/> Hotel </h3>} key="2">
                                    Tab 2
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className='promotion-car'>
                    <h2>Offer</h2>
                    <Row gutter={32}>
                        <Col span={6}>
                            <div>
                                <img src={require('../../ultils/images/offer1.webp')} alt=""/>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <img src={require('../../ultils/images/offer2.webp')} alt=""/>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <img src={require('../../ultils/images/offer3.webp')} alt=""/>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <img src={require('../../ultils/images/offer4.webp')} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{padding: '30px'}}>
                    <Card title='Top route'>
                        <Row gutter={16}>
                            {this.renderRoute()}
                        </Row>
                    </Card>
                </div>
            </div>
        );
    }
}

export default HomeScene;
