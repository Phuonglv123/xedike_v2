import React, {Component} from 'react';
import {Row, List} from "antd";
import './SearchRoute.css';
import {connect} from "react-redux";
import TripsService from "../../service/tripsService";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import ResultRouteScene from './ResultRouteScene';
import {searchTrip} from "../../reducers/tripReducers";


class SearchRouteScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }


    async componentDidMount() {
        let res = await TripsService.getAllTrip();
        this.setState({
            data: res
        });
    };

    getBookTrip = async (i) => {
        const id_passenger = this.props.user.payload.id;
        let res = await TripsService.bookTripId(i._id, {
            accountID: id_passenger,
            locationGetIn: `${i.locationFrom}`,
            locationGetOff: `${i.locationTo}`,
            paymentMethod: "cash",
            notes: "test",
        })
        debugger
    }

    onChangeDate(date, dateString) {
        console.log(date, dateString);
    }

    render() {
        const {data} = this.state;
        console.log(this.props.resultSearch);
        return (
            <div className='component-search'>
                <div>
                    <div className='background-home'/>
                    <div className='form-booking'>
                        <SearchComponent/>
                    </div>
                </div>

                <div className='list-route'>

                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {users, authentication, searchTrip} = state;
    const {user} = authentication;
    const {resultSearch} = searchTrip
    return {
        users,
        user,
        resultSearch
    }

}

const connectSearchTrip = connect(mapStateToProps)(SearchRouteScene)
export default connectSearchTrip;
