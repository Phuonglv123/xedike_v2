import React, {Component} from 'react';
import {List, Row, Col, Icon, Avatar, Rate, Button, Input} from "antd";
import './SearchRoute.css';
import {connect} from "react-redux";
import TripsService from "../../service/tripsService";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import ItemsBooking from "./ItemsBooking";
import usersService from "../../service/usersService";


class SearchRouteScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showItem: {}
        }
    }

    showContent(id) {
        this.setState({
            showItem: {
                ...this.state.showItem,
                [id]: true
            }
        });
    }


    async componentDidMount() {
        let res = await TripsService.getAllTrip();
        this.setState({
            data: res
        });
    };

    dropDownItem(item) {
        this.setState({
            showItem: true,
            id_trip: item

        })
    }

    render() {
        const {data} = this.state;
        console.log(data)
        return (
            <div className='component-search'>
                <div>
                    <div className='background-home'/>
                    <div className='form-booking'>
                        <SearchComponent/>
                    </div>
                </div>

                <div className='list-route'>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 20,
                        }}
                        dataSource={this.props.resultSearch ? this.props.resultSearch : data}
                        renderItem={(item, index) => (
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
                                                    <span>06/12/2016 13:00</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={7}>
                                            <div>
                                                <div className='infoRoute'>
                                                    <Icon type="car" className='icon'/>
                                                    <span>toyota innova 2010</span>
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
                                                    title={<span>Name Driver</span>}
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
                                                <div className='buttonRoute'>
                                                    <Button type="primary" icon="car"
                                                            onClick={() => this.showContent(item._id)}>View
                                                        Route</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    {this.state.showItem[item._id] && <ItemsBooking driverId={item.driverID}/>}
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {users, authentication, searchTrip} = state;
    const {user} = authentication;
    const {resultSearch} = searchTrip;
    return {
        users,
        user,
        resultSearch
    }

}

const connectSearchTrip = connect(mapStateToProps)(SearchRouteScene);
export default connectSearchTrip;
