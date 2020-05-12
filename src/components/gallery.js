import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// import Logo from "../images/logo.png";


export default class GalleryNavContainer extends Component {
        // constructor(props) {
        //     super(props);
    
        //     this.state = {
    
        //         url: this.props.item.url,
        //         planName: this.props.item.planName,
        //         bedrooms: this.props.item.bedrooms,
        //         bathrooms: this.props.item.bathrooms,
        //         sqfeet: this.props.item.sqfeet,
        //         fp1_url: this.props.item.fp1_url,
        //         fp2_url: this.props.item.fp2_url
        //     };
        // }
    
        // handleGalleryHome = () => {
        //     let galleryList = parseInt(this.state.galleryHome) + 1
        //     fetch(
        //         `https://jel-flask-dating-app-api.herokuapp.com/profile/${this.props.item.id}`,
        //         {
        //             method: "PATCH",
        //             headers: { "Content-Type": "application/json" },
        //             body: JSON.stringify({
        //                 galleryItem: galleryList.toString(),
        //                 // notScore: this.state.isNotHot.toString()
        //             })
        //         }
        //     ).then((res) => {
        //         this.setState({
        //             galleryHome: galleryList.toString()
        //         })
        //     })
        // }
    

      render() {
        return (
            <div className="navigation-wrapper">
              
                <div className="btn-wrapper"></div>
                    <button id="btn3" >ONE STORY</button>
                    <button id="btn4">TWO STORY</button>
                  
            </div> 
        )
    }
 }

    