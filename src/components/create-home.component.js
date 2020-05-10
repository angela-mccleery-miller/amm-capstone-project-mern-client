import React, { Component } from "react";
import axios from "axios";

// import SlideImages from "./components/gallery";
// import EditHome from "./components/edit-home.component";
// import HomesList from "./components/homes-list.component";


export default class CreateHome extends Component {

    constructor(props) {
        super(props);

        this.onChangeHomeImg = this.onChangeHomeImg.bind(this);
        this.onChangeHomePlanName = this.onChangeHomePlanName.bind(this);
        this.onChangeHomeBedrooms = this.onChangeHomeBedrooms.bind(this);
        this.onChangeHomeBathrooms = this.onChangeHomeBathrooms.bind(this);
        this.onChangeHomeSqfeet = this.onChangeHomeSqfeet.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
           
        this.state = {
            home_img: '',
            home_planName: '',
            home_bedrooms: '',
            home_bathrooms: '',
            home_sqfeet: '',
            // home_completed: false
        }
    }
  
   
        onChangeHomeImg(e) {
        this.setState({
            home_img: e.target.value
        })
    }

    onChangeHomePlanName(e) {
        this.setState({
            home_planName: e.target.value
        })
    }

    onChangeHomeBedrooms(e) {
        this.setState({
            home_bedrooms: e.target.value
        })
    }

    onChangeHomeBathrooms(e) {
        this.setState({
            home_bathrooms: e.target.value
        })
    }

    onChangeHomeSqfeet(e) {
        this.setState({
            home_sqfeet: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Home Image: ${this.state.home_img}`)
        console.log(`Home Plan Name: ${this.state.home_planName}`);
        console.log(`Number of Bedrooms: ${this.state.home_bedrooms}`);
        console.log(`Number of Bathrooms: ${this.state.home_bathrooms}`);
        // console.log(`Home Completed: ${this.state.home_completed}`);

        const newHome = {
            home_img: this.state.home_img,
            home_planName: this.state.home_planName,
            home_bedrooms: this.state.home_bedrooms,
            home_bathrooms: this.state.home_bathrooms,
            home_sqfeet: this.state.home_sqfeet,
            // home_completed: this.state.home_completed,
        }

        axios.post('http://localhost:4000/homes/add', newHome)
            .then(res => console.log(res.data));

        this.setState({
            home_img: '',
            home_planName: '',
            home_bedrooms: '',
            home_bathrooms: '',
            home_sqfeet: '',
            // home_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 40}}>
                <h3>Create New Home Listing</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Home Image</label>
                        <input type="img"
                                className="form-control"
                                value={this.state.home_img}
                                onChange={this.onChangeHomeImg}
                                />
                    </div>

                    <div className="form-group">
                        <label>Home Plan Name</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.home_planName}
                                onChange={this.onChangeHomePlanName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Number of Bedrooms</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.home_bedrooms}
                                onChange={this.onChangeHomeBedrooms}
                                />
                    </div>

                    <div className="form-group">
                        <label>Number of Bathrooms</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.home_bathrooms}
                                onChange={this.onChangeHomeBathrooms}
                                />
                    </div>


                    <div className="form-group">
                        <label>Square Footage</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.home_sqfeet}
                                onChange={this.onChangeHomeSqfeet}
                                />
                    </div>
  
{/* 
                    <div className="form-group">
                        <div className="radioButtons">
                            <label>
                                <input type="radio" value="oneLevel"/>
                                One Level
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="radioButtons">
                            <label>
                                <input type="radio" value="twoStory"/>
                                Two Story
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="radioButtons">
                            <label>
                                <input type="radio" value="threeStory"/>
                                Three Story
                            </label>
                        </div>
                    </div> */}

                    <div className="form-group">
                        <input type="submit" value="Create New Home" className="btn btn-primary"/>
                    </div>            
            </form>
          </div>
     )
  }
}