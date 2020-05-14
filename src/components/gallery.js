import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// import "../styles/main.scss";

// import Logo from "../images/logo.png";
  
export default class GalleryContainer extends Component {
   
        // constructor(props) {
        //     super(props);
    
        //     this.state = {
    
        //         url: this.props.item.url,
        //         planName: this.props.item.planName,
        //         // bedrooms: this.props.item.bedrooms,
        //         // bathrooms: this.props.item.bathrooms,
        //         // sqfeet: this.props.item.sqfeet,
        //         stories: this.props.item.stories,
        //         // fp1_url: this.props.item.fp1_url,
        //         // fp2_url: this.props.item.fp2_url
        //     };
        // }
    
        // handleGalleryHome = () => {
        //     let galleryList = parseInt(this.state.galleryHome) + 1
        //     fetch(
        //         `https://am-mern-capstone-api.herokuapp.com/homes/${this.props.item.id}`,
        //         {
        //             method: "PATCH",
        //             headers: { "Content-Type": "application/json" },
        //             body: JSON.stringify({
        //                 galleryItem: galleryList.toString(),
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
                
                    <div className="gallery-container">
                            {/* <div id="homeGallery"> */}
                            {/* <div id="homeGallery" class="topTwo"> */}
                                {/* <h4>{this.props.planName}</h4>
                                <p>{this.props.galleryContainer}</p> */}

                            <div id="homeGallery">
                                <h4>The Gardabaer</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/2tqc04ft1ggn047fjhc9cj5s5/w800x533.JPG?v=3" alt="exterior"/>
                            </div>
                                
                            <div id="homeGallery">
                                <h4>The Glacier View</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/u9bmqc539ec9bp9u0uen28tdbg/w800x533.jpg?v=3" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h4>The Grindavik</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/du0n5ek0lajgct9u65fhc6edun/w800x533.JPG?v=2" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h4>The Husavik</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/9s4o3j5qk1hlsk0nf2cg1vs88p/w800x533.jpg?v=13" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h4>The Icelandia</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/vg1gfbftb2k0oka90ubc7ucaav/w800x533.JPG?v=3" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h4>The Northern Lights</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/luqirg8nc8a4ctaggh8n329fhh/w800x533.jpg?v=2" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h4>The Reykjavik</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/mljuu1mu950bf5rtmcbolo16lo/w800x533(.JPG?v=3" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h4>The Selfoss</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/l9rav1rn07bg3ojrde57bs06q4/w800x533.jpg?v=2" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h4>The Volcanic: Plan One</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/h2oup9no4d60mjopk0lk0t4gd9/w800x533.jpg?v=2" alt="exterior"/>
                            </div>
     
                            <div id="homeGallery">
                                <h4>The Volcanic: Plan Two</h4>
                                {/* <p>{this.props.galleryContainer}</p> */}
                                <img src="https://cdn.houseplansservices.com/product/oanrn2hpo2onko9gr94416qock/w800x533.jpg?v=2" alt="exterior"/>
                            </div>
     
                        </div>
                    );  
                }
}
 

                       
                //  {/* <div> */}
                //      {/* <button onClick={() => this.handleFilter('One Story')}>One Story</button> */}
                //     {/* <button onClick={() => this.handleFilter('Two Story')}>Two Story</button> */} */}
                //  {/* </div> */}
                //  {/* <div> */}
                //      {/* {this.galleryItems()} */} */}
                //  {/* </div>  */}
                           
           