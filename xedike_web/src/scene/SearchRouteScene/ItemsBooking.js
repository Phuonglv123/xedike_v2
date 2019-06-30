import React, {Component} from 'react';
import {Row, Col, Card} from "antd";
import './ItemsBooking.css';

class ItemsBooking extends Component {
    render() {
        return (
            <div className='bck-itemBooking'>
                <div>
                    <Row>
                        <Col span={8}>
                            <Card title="Default size card" extra={<a href="#">More</a>} style={{width: '100%'}}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Select From/To" extra={<a href="#">More</a>} style={{width: '100%'}}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Information Customer" extra={<a href="#">More</a>} style={{width: '100%'}}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ItemsBooking;