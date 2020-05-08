import React, { Component } from "react";
import axios from "axios";


export default class EditHome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            home_planName: '',
            home_bedrooms: '',
            home_bathrooms: '',
            home_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/homes/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    home_planName: response.data.home_planName,
                    home_bedrooms: response.data.home_bedrooms,
                    home_bathrooms: response.data.home_bathrooms,
                    home_sqfeet: response.data.home_sqfeet,
                    home_completed: response.data.home_completed

                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeHomePlanName(e) {
        this.setState({
            home_planName: e.target.value
        });
    }

    onChangeHomeBedrooms(e) {
        this.setState({
            home_bedrooms: e.target.value
        });
    }
    
    onChangeHomeBathrooms(e) {
        this.setState({
            home_bathrooms: e.target.value
        });
    }

    onChangeHomeSqfeet(e) {
        this.setState({
            home_sqfeet: e.target.value
        });
    }

    onChangeHomeCompleted(e) {
        this.setState({
            home_completed: e.target.value 
        })
    }
    
    render() {
        return (
            <div>
                <h3>Update Home</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Plan Name: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.home_planName}
                                onChange={this.onChangeHomePlanName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Bedrooms: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.home_bedrooms}
                                onChange={this.onChangeHomeBedrooms}
                                />
                    </div>

                    <div className="form-group">
                        <label>Bathrooms: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.home_bathrooms}
                                onChange={this.onChangeHomeBathrooms}
                                />
                    </div>

                    <div className="form-group">
                        <label>Square Feet: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.home_sqfeet}
                                onChange={this.onChangeHomeSqfeet}
                                />
                    </div>

                    <div>
                        <div className="form-check">
                            <input type="checkbox"
                            className="form-check-input"
                            id="completedCheckbox"
                            name="completedCheckbox"
                            onChange={this.onChangeHomeCompleted}
                            checked={this.state.home_completed}
                            value={this.state.home_completed}
                            />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                COMPLETED 
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="SUBMIT" value="UPDATE HOME" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}