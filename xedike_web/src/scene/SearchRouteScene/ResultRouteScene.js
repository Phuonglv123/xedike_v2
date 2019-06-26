import React, {Component} from 'react';
import {connect} from "react-redux";

class ResultRouteScene extends Component {
    render() {
        console.log(this.props)
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const searching = state.searching;
    return {
        searching
    }
}

const connectResultSearch = connect(mapStateToProps)(ResultRouteScene);
export default connectResultSearch;
