import React, {Component} from 'react';
import BlockUi from 'react-block-ui';
import {Typography, Spin} from "antd";
import './BlockUI.css';

const {Text} = Typography;
type Props = {
    blocking: boolean
}

const loading = (
    <div className="loading-base">
        <Spin />
        <Text strong>Loading...</Text>
    </div>
)


class BlockUI extends Component <Props>{
    render() {
        return (
            <BlockUi tag="div" blocking={this.props.blocking} loader={loading}>{this.props.children}</BlockUi>
        );
    }
}

export default BlockUI;