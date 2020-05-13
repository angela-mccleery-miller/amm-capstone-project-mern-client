import React, { Component } from 'react';
 
// import Logo from "../images/logo.png";
 
 
export default class GallerysContainer extends Component {
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
                
                    <div className="card-container">
                        <div className="card-wrapper">

                            <div id="homeGallery">
                            {/* <div id="homeGallery" class="topTwo"> */}
                                <h3>The Gardabaer</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                            {/* <div id="homeGallery" class="topTwo"> */}
                                <h3>The Glacier View</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h3>The Grindavik</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h3>The Husavik</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h3>The Icelandia</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h3>The Northern Lights</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h3>The Reykjavik</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h3>The Selfoss</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h3>The Volcanic: Plan One</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h3>The Volcanic: Plan Two</h3>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://source.unsplash.com/random/275x275/?home/?iceland" alt="exterior"/>
                            </div>
     
                        </div>
                    </div>
     
                // <div>
                //     <button onClick={() => this.handleFilter('One Story')}>One Story</button>
                //     <button onClick={() => this.handleFilter('Two Story')}>Two Story</button> */}
                // </div>
                // <div>
                //     {this.galleryItems()} */}
                // </div>
                
                
            );   
    
        
    }
 }
