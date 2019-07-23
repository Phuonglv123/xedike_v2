import React, {Component} from 'react';
import './HomeScene.css'
import {Button, Col, Icon, List, Tabs} from 'antd';
import BlockUI from "../../components/BlockUI/BlockUI";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import tripsService from "../../service/tripsService";
import {userActions} from "../../actions/userActions";
import {connect} from "react-redux";

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
        });
        let res = await tripsService.getAllTrip();
        this.setState({
            data: res,
            loading: false,
        });

        await this.getInfoDriver();
    }

    getInfoDriver() {
        let id;
        if (this.props.user === undefined) {
            id = null
        } else {
            id = this.props.user.user._id;
        }
        const {dispatch} = this.props;
        dispatch(userActions.getInfoDriverActions(id))
    }

    render() {
        const {data} = this.state;
        const listItem = <List
            header={null}
            footer={null}
            dataSource={data}
            pagination={{
                pageSize: 10,
            }}
            renderItem={item => (
                <Col span={12}>
                    <div className="list-route-item">
                        <div className="name-location">
                            <span>{item.locationFrom}</span>
                            <Icon className="icon-location" type="arrow-right"/>
                            <span>{item.locationTo}</span>
                        </div>
                        <div className="name-fee">
                            <span className="fee-ticket">{item.fee}.000 VND/ticket</span>
                            <Button style={{
                                backgroundColor: "#f8c13c",
                                color: "black",
                                fontSize: "14px",
                                fontWeight: "bold"
                            }} icon="car" size={"large"}>
                                Book Ticket
                            </Button>
                        </div>
                    </div>
                </Col>
            )}
        />
        return (
            <div className='component-home'>
                <div className="slider-body">
                    <img src={require("./../../ultils/images/banner-nguoi-1920x450.png")} alt=""/>
                </div>
                <div className="home-search-ticket-panel">
                    <SearchComponent/>
                </div>
                <BlockUI blocking={this.state.loading}>
                    <div className="home-list-route">
                        <div className="card-list-route">

                            <Tabs type="card">
                                <TabPane tab="All Route" key="1">
                                    {listItem}
                                </TabPane>
                                <TabPane tab="Hà Nội" key="2">
                                    {listItem}
                                </TabPane>
                                <TabPane tab="Đà Nẵng" key="3">
                                    {listItem}
                                </TabPane>
                            </Tabs>

                        </div>
                    </div>
                </BlockUI>
                <div className="take-care">
                    <div className="text-care">
                        <span>Bring safe your trips! Wish you good luck!</span>
                    </div>
                    <div className="card-take-care">
                        <div className="care-item">
                            <Icon type="border-outer" className="icon"/>
                            <div className="item">
                                <span>5.000+</span>
                                <span>My routes</span>
                            </div>
                        </div>
                        <div className="care-item">
                            <Icon type="car" className="icon"/>
                            <div className="item">
                                <span>2.000+</span>
                                <span>My Driver</span>
                            </div>
                        </div>
                        <div className="care-item">
                            <Icon type="idcard" className="icon"/>
                            <div className="item">
                                <span>5.000+</span>
                                <span>My Passenger</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="introduce-home">
                    <div className="text-animation">
                        <span className="animation-type">Share your route with everybody ! Happy </span>
                    </div>
                    <div className="card-intro">
                        <div className="background-intro"/>
                        <div className="bus-img">
                            <img src={require("../../ultils/images/banh-xe.gif")} alt=""/>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

function mapStateToProps(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {
        users,
        user,
    }

}

const connectHomeScene = connect(mapStateToProps)(HomeScene);

export default connectHomeScene;
