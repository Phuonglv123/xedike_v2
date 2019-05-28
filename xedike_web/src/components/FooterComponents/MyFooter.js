import React, {Component} from 'react';
import {Button, Col, Row, Layout} from "antd";
import './MyFooter.css';

const {Footer} = Layout;

class MyFooter extends Component {
    render() {
        return (
            <Footer>
                <div className='my-footer'>
                    <div className='footer-top'>
                        <div className='footer-text'>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur culpa deserunt est facilis libero modi, molestiae molestias nihil odio officiis qui, quos reiciendis rem sequi sunt suscipit tempore.</span>
                        </div>
                        <div className='footer-social'>
                            <Button shape="circle" icon="search" size='large'/>
                            <Button shape="circle" icon="search" size='large'/>
                            <Button shape="circle" icon="search" size='large'/>
                            <Button shape="circle" icon="search" size='large'/>
                        </div>
                    </div>
                    <div className='footer-content'>
                        <Row gutter={32}>
                            <Col span={6}>
                                <div className='footer-title'>
                                    <h4>Help Center</h4>
                                </div>
                                <div className='footer-text'>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className='footer-title'>
                                    <h4>Help Center</h4>
                                </div>
                                <div className='footer-text'>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className='footer-title'>
                                    <h4>Help Center</h4>
                                </div>
                                <div className='footer-text'>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className='footer-title'>
                                    <h4>Help Center</h4>
                                </div>
                                <div className='footer-text'>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                    <span>lorem ipsum dolor sit amet</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='footer-bottom'>
                        <div>
                            <span>Copyright</span>
                        </div>
                    </div>
                </div>
            </Footer>
        );
    }
}

export default MyFooter;
