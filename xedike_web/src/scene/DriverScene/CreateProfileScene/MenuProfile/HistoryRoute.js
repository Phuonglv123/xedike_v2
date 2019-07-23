import React, {Component} from 'react';
import {Avatar, Card, Col, Icon, List, message, Rate, Row, Spin} from "antd";
import usersService from "../../../../service/usersService";
import {connect} from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';


class HistoryRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            hasMore: true,
        }
    }

    componentDidMount() {
        this.handleData();
    }

    async handleData() {
        let id = this.props.user.user._id;
        let res = await usersService.historyTripForDriver(id);
        this.setState({
            data: res,
        });
    }

    handleInfiniteOnLoad = () => {
        let {data} = this.state;
        this.setState({
            loading: true,
        });
        if (data.length > 1) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.handleData();
        this.setState({
            loading: false,
        })
    };

    render() {
        const dataDriver = this.props.getInfoDriver.resultInfoDriver;
        return (
            <div>
                <Card>
                    <div className="demo-infinite-container">
                        <InfiniteScroll
                            initialLoad={false}
                            pageStart={0}
                            loadMore={this.handleInfiniteOnLoad.bind(this)}
                            hasMore={!this.state.loading && this.state.hasMore}
                            useWindow={false}
                        >
                            <List
                                dataSource={this.state.data}
                                renderItem={item => (
                                    <div className='routeCard'>
                                        <div className='insideRouteCard'>
                                            <Row gutter={16}>
                                                <Col span={7}>
                                                    <div>
                                                        <div className='locationRoute'>
                                                            <span>{item.locationFrom}</span>
                                                            <Icon type="arrow-right" className='icon'/>
                                                            <span>{item.locationTo}</span>
                                                        </div>
                                                        <div className='timeRoute'>
                                                            <Icon type="calendar" className='icon'/>
                                                            <span>{item.startTime}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={7}>
                                                    <div>
                                                        <div className='infoRoute'>
                                                            <Icon type="car" className='icon'/>
                                                            <span>{dataDriver.modelCar}</span>
                                                        </div>
                                                        <div className='availableUser'>
                                                            <div>
                                                                <Icon type="usergroup-add"/>
                                                                <span>{item.availableSeats}</span>
                                                            </div>
                                                            <div>
                                                                <Icon type="book"/>
                                                                <span>end</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={7}>
                                                    <div>
                                                        <List.Item.Meta
                                                            avatar={<Avatar size="large" icon="user"/>}
                                                            title={<span>{this.props.user.user.username}</span>}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div>

                                                        </div>
                                                        <div style={{display: "grid"}}>
                                                            <Rate/>
                                                            <span>None rate</span>
                                                        </div>
                                                    </div>

                                                </Col>
                                                <Col span={3}>
                                                    <div>
                                                        <div className='feeRoute'>
                                                            <span>{item.fee}.000 VND</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                )}
                            >
                                {this.state.loading && this.state.hasMore && (
                                    <div className="demo-loading-container">
                                        <Spin/>
                                    </div>
                                )}
                            </List>
                        </InfiniteScroll>
                    </div>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users, authentication, getInfoDriver} = state;
    const {user} = authentication;
    return {
        user,
        users,
        getInfoDriver
    };
}

const connectHistoryRoute = connect(mapStateToProps)(HistoryRoute)

export default connectHistoryRoute;
