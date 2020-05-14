import React, { Component } from "react";
import axios from "axios";



export default class CreateHome extends Component {

    constructor(props) {
        super(props);

        this.onChangePlanName = this.onChangePlanName.bind(this);
        this.onChangeBedrooms = this.onChangeBedrooms.bind(this);
        this.onChangeBathrooms = this.onChangeBathrooms.bind(this);
        this.onChangeSqfeet = this.onChangeSqfeet.bind(this);
        this.onChangeStories = this.onChangeStories.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeFp1Url = this.onChangeFp1Url.bind(this);
        this.onChangeFp2Url = this.onChangeFp2Url.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
           
        this.state = {
            
            planName: '',
            bedrooms: '',
            bathrooms: '',
            sqfeet: '',
            stories: '',
            url: '',
            fp1_url: '',
            fp2_url: '',
            // completed: false
        }
    }
  
   
    onChangePlanName(e) {
        this.setState({
            planName: e.target.value
        })
    }

    onChangeBedrooms(e) {
        this.setState({
            bedrooms: e.target.value
        })
    }

    onChangeBathrooms(e) {
        this.setState({
            bathrooms: e.target.value
        })
    }

    onChangeSqfeet(e) {
        this.setState({
            sqfeet: e.target.value
        })
    }

    onChangeStories(e) {
        this.setState({
            stories: e.target.value
        })
    }

    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        })
    }

    onChangeFp1Url(e) {
        this.setState({
            fp1_url: e.target.value
        })
        console.log(this.state.fp1_url)
    }

    onChangeFp2Url(e) {
        this.setState({
            fp2_url: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Plan Name: ${this.state.planName}`);
        console.log(`Number of Bedrooms: ${this.state.bedrooms}`);
        console.log(`Number of Bathrooms: ${this.state.bathrooms}`);
        console.log(`Square Footage: ${this.state.sqfeet}`)
        console.log(`Stories: ${this.state.stories}`)
        console.log(`Home Image: ${this.state.url}`)
        console.log(`Floor Plan 1: ${this.state.fp1_url}`)
        console.log(`Floor Plan 2: ${this.state.fp2_url}`)
        console.log(`Form Submitted:`);
        // console.log(`Completed: ${this.state.completed}`);

        const newHome = {
            
            planName: this.state.planName,
            bedrooms: this.state.bedrooms,
            bathrooms: this.state.bathrooms,
            sqfeet: this.state.sqfeet,
            stories: this.state.stories,
            url: this.state.url,
            fp1_url: this.state.fp1_url,
            fp2_url: this.state.fp2_url
            // completed: this.state.completed,
        }

        axios.post('https://am-mern-capstone-api.herokuapp.com/homes/add', newHome)
            .then(res => console.log(res.data));

        this.setState({
            
            planName: '',
            bedrooms: '',
            bathrooms: '',
            sqfeet: '',
            stories: '',
            url: '',
            fp1_url: '',
            fp2_url: '',
            // completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 40}}>
                <h3>Create a New Home Listing</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Home Image URL</label>
                        <input type="string"
                                className="form-control"
                                value={this.state.url}
                                onChange={this.onChangeUrl}
                                />
                    </div>

                    <div className="form-group">
                        <label>Floor Plan 1 URL</label>
                        <input type="string"
                                className="form-control"
                                value={this.state.fp1_url}
                                onChange={this.onChangeFp1Url}
                                />
                    </div>


                   <div className="form-group">
                        <label>Floor Plan 2 URL</label>
                        <input type="string"
                                className="form-control"
                                value={this.state.fp2_url}
                                onChange={this.onChangeFp2Url}
                                />
                    </div>

                    <div className="form-group">
                        <label>Home Plan Name</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.planName}
                                onChange={this.onChangePlanName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Number of Bedrooms</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.bedrooms}
                                onChange={this.onChangeBedrooms}
                                />
                    </div>

                    <div className="form-group">
                        <label>Number of Bathrooms</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.bathrooms}
                                onChange={this.onChangeBathrooms}
                                />
                    </div>


                    <div className="form-group">
                        <label>Square Footage</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.sqfeet}
                                onChange={this.onChangeSqfeet}
                                />
                    </div>
  
                    <div className="form-group">
                        <label>Stories</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.stories}
                                onChange={this.onChangeStories}
                                />
                    </div>
  


                    <div className="form-group">
                        <input type="submit" value="CREATE New Home" className="btn-create"/>
                    </div>            
            </form>
          </div>
     )
  }
}