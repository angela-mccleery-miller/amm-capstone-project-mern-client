import React, { Component } from "react";
import axios from "axios";

// import SlideImages from "./components/gallery";
// import CreateHome from "./create-home.component";
// import HomesList from "./homes-list.component";
// import GalleryInfo from "./gallery"

export default class EditHome extends Component {

    constructor(props) {
        super(props);

        this.onChangePlanName = this.onChangePlanName.bind(this);
        this.onChangeBedrooms = this.onChangeBedrooms.bind(this);
        this.onChangeBathrooms = this.onChangeBathrooms.bind(this);
        this.onChangeSqfeet = this.onChangeSqfeet.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeFp1Url = this.onChangeFp1Url.bind(this);
        this.onChangeFp2Url = this.onChangeFp2Url.bind(this);
        this.handleDelete = this.handleDelete.bind(this)

        // this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            planName: '',
            bedrooms: '',
            bathrooms: '',
            sqfeet: '',
            url: '',
            fp1_url: '',
            fp2_url: '',
            // completed: false
        }
    }

    componentDidMount() {
        axios.get('https://am-mern-capstone-api.herokuapp.com/homes/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    planName: response.data.planName,
                    bedrooms: response.data.bedrooms,
                    bathrooms: response.data.bathrooms,
                    sqfeet: response.data.sqfeet,
                    url: response.data.url,
                    fp1_url: response.data.fp1_url,
                    fp2_url: response.data.fp2_url,

                    // completed: response.data.completed
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangePlanName(e) {
        this.setState({
            planName: e.target.value
        });
    }

    onChangeBedrooms(e) {
        this.setState({
            bedrooms: e.target.value
        });
    }
    
    onChangeBathrooms(e) {
        this.setState({
            bathrooms: e.target.value
        });
    }

    onChangeSqfeet(e) {
        this.setState({
            sqfeet: e.target.value
        });
    }

    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        });
    }

    onChangeFp1Url(e) {
        this.setState({
            fp1_url: e.target.value
        });
    }

    onChangeFp2Url(e) {
        this.setState({
            fp2_url: e.target.value
        });
    }

    // onChangeCompleted(e) {
    //     this.setState({
    //         completed: !this.state.completed 
    //     })
    // }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            planName: this.state.planName,
            bedrooms: this.state.bedrooms,
            bathrooms: this.state.bathrooms,
            sqfeet: this.state.sqfeet,
            url: this.state.url,
            fp1_url: this.state.fp1_url,
            fp2_url: this.state.fp2_url,
            // completed: this.state.completed
        };
        axios.post('https://am-mern-capstone-api.herokuapp.com/homes/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }


    handleDelete() {

        axios
             .delete(`https://am-mern-capstone-api.herokuapp.com/homes/delete/${this.props.match.params.id}`)
             .then( response => console.log(response))
             .catch(error => console.log(error))
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
                                value={this.state.planName}
                                onChange={this.onChangePlanName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Bedrooms: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.bedrooms}
                                onChange={this.onChangeBedrooms}
                                />
                    </div>

                    <div className="form-group">
                        <label>Bathrooms: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.bathrooms}
                                onChange={this.onChangeBathrooms}
                                />
                    </div>

                    <div className="form-group">
                        <label>Square Feet: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.sqfeet}
                                onChange={this.onChangeSqfeet}
                                />
                    </div>

                    <div className="form-group">
                        <label>Home Image URL: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.url}
                                onChange={this.onChangeUrl}
                                />
                    </div>

                    <div className="form-group">
                        <label>Floor Plan 1 URL: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.fp1_url}
                                onChange={this.onChangeFp1Url}
                                />
                    </div>

                    <div className="form-group">
                        <label>Floor Plan 2 URL: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.fp2_url}
                                onChange={this.onChangeFp2Url}
                                />
                    </div>

                    {/* <div>
                        <div className="form-check">
                            <input type="checkbox"
                            className="form-check-input"
                            id="completedCheckbox"
                            name="completedCheckbox"
                            onChange={this.onChangeCompleted}
                            checked={this.state.completed}
                            value={this.state.completed}
                            />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                COMPLETED 
                            </label>
                        </div> */}
                        <br/>

                        
                        <div className="form-group">
                            <input type="SUBMIT" value="UPDATE HOME" className="btn2-primary"/>
                        </div>

                        <div className="delete-button">
                            <button onClick={this.handleDelete}>Delete</button>
                        </div>
                </form>
            </div>
        )
    }
}