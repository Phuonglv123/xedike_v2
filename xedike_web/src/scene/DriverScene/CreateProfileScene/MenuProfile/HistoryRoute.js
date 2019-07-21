import React, {Component} from 'react';
import {Card, List, Avatar} from "antd";
import usersService from "../../../../service/usersService";
import {connect} from "react-redux";


class HistoryRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        let id = this.props.user.user._id;
        let res = await usersService.historyTripForDriver(id);
        this.setState({
            data: res
        })
    }

    render() {
        return (
            <div>
                <Card>
                    {/*<List*/}
                    {/*    itemLayout="horizontal"*/}
                    {/*    dataSource={this.state.data}*/}
                    {/*    renderItem={item => (*/}
                    {/*        <List.Item>*/}
                    {/*            <List.Item.Meta*/}
                    {/*                avatar={<Avatar*/}
                    {/*                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}*/}
                    {/*                title={<a href="https://ant.design">{item.locationFrom}</a>}*/}
                    {/*                description="Ant Design, a design language for background applications, is refined by Ant UED Team"*/}
                    {/*            />*/}
                    {/*        </List.Item>*/}
                    {/*    )}*/}
                    {/*/>*/}
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {
        user,
        users,
    };
}

const connectHistoryRoute = connect(mapStateToProps)(HistoryRoute)

export default connectHistoryRoute;
