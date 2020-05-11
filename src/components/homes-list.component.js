import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// import CreateHome from "./create-home.component";
// import EditHome from "./edit-home.component";
// import SlideImages from "./components/gallery";

const Home = props => (
    <tr>
        <td className={props.home.completed ? 'EDITED' : ''}>{props.home.planName}</td>
        <td className={props.home.completed ? 'EDITED' : ''}>{props.home.bedrooms}</td>
        <td className={props.home.completed ? 'EDITED' : ''}>{props.home.bathrooms}</td>
        <td className={props.home.completed ? 'EDITED' : ''}>{props.home.sqfeet}</td>
        {/* <td className={props.home.completed ? 'EDITED' : ''}>{props.home.url}</td>
        <td className={props.home.completed ? 'EDITED' : ''}>{props.home.fp1_url}</td>
        <td className={props.home.completed ? 'EDITED' : ''}>{props.home.fp2_url}</td> */}


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
    // axios.get('http://localhost:4000/homes/')
    // .then(response => {
    //     this.setState({homes: response.data})
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })
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
                            {/* <th>EXT IMG</th>
                            <th>FP 1</th>
                            <th>FP 2</th> */}
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