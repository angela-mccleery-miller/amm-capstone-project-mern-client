import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// import SlideImages from "./components/gallery";

const Home = props => (
    <tr>
        <td className={props.home.home_completed ? 'DELETED' : ''}>{props.home.home_planName}</td>
        <td className={props.home.home_completed ? 'DELETED' : ''}>{props.home.home_bedrooms}</td>
        <td className={props.home.home_completed ? 'DELETED' : ''}>{props.home.home_bathrooms}</td>
        <td className={props.home.home_completed ? 'DELETED' : ''}>{props.home.home_sqfeet}</td>
        <td>
            <Link to={"/edit/"+props.home._id}>EDIT</Link>
            {/* <br/>
            <Link to={"/delete/"+props.home._id}>DELETE</Link> */}
        </td>
    </tr>
)

export default class HomesList extends Component {

    constructor(props) {
        super(props);
        this.state = {homes: []};
    } 


    

componentDidMount() {
    axios.get('http://localhost:4000/homes/')
    .then(response => {
        this.setState({homes: response.data})
    })
    .catch(function (error) {
        console.log(error);
    })
}

componentDidUpdate(){
    axios.get('http://localhost:4000/homes/')
    .then(response => {
        this.setState({homes: response.data})
    })
    .catch(function (error) {
        console.log(error);
    })
}

homeList() {
    return this.state.homes.map(function(currentHome, i) {
        return <Home home={currentHome} key={i} />;
    });
}

    render() {
        return (
            <div>
                <h3>Current Home Inventory</h3>
                <table className="table table-striped" style={{ marginTop: 30 }}>
                    <thead>
                        <tr>
                            <th>PLAN NAME</th>
                            <th>BEDROOMS</th>
                            <th>BATHROOMS</th>
                            <th>SQUARE FEET</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.homeList()}
                    </tbody>
                </table>
            </div>
        )
    }
}