// import React, { Component } from "react";
// import axios from 'axios';
// // // import ReactHtmlParser from "react-html-parser";
// // import { Link } from 'react-router-dom';
// // import striptags from "striptags";

// // import CreateHome from "./components/create-home";
// // import EditHome from "./components/edit-home";
// // import HomesList from "./components/homes-list";
// // import GalleryContainer from "./gallery";

// export default class AboutUs extends Component {
//     constructor() {
//         super();

//         const {
//             image_url,
//             title,
//             content
//         }
//     }
   
//     render() {
//         return (

//                 <div className="builder-bio">
//                    <img classname="image_url" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPNkHuHz-W20MGoCR7OvCrHZ2BY3_vVDV3nzrgJlErqM4ZE_rg&usqp=CAU"/>
//                     <h3 classname="title">About Us</h3>
//                     <p className="about-content">We became passionate about custom homes as we looked around at our Icelandic Sod House realizing that it probably could be better... 
//                         From our humble beginnings here, we have studied that concept of earthen homes and the incredible insulation, solid coverage from Nature's Fury and the solid foundation Mother Earth provides when our land begins to shake and rumble as the many volcanoes do their thing.  We wanted a way to be able to use these natural treasures to make our homes more sustainable and yet, also more efficient - not to mention, more cost effective.  
//                         Our special "signature" we leave on every Icelandic Custom Home we build is the kitchen window sill.  We literally create a living window sill of the greenest softest grasses.  It is paying homage to the green, lush grasses of the Homeland and a simple reminder that, "The grass is ALWAYS greener on YOUR SIDE of the fence in an Icelandic Custom Home"!
//                     </p>
//                     <br/>
//                     <h4 className="title">Contact Us</h4>
//                     <p>Icelandic Custom Homes</p>
//                     <img className="ice-address" src="https://media.cntraveler.com/photos/57c59e47523900e805f2e35e/master/w_850,c_limit/1GVjLKF.jpg"/>
//                     <br/>
//                     <img className="copyright" src="data:image/png;base64,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"/>
//                     <p>Copyrighted 2020.  All Rights Reserved.  Miller Marketing</p>

//                 </div>
           
//         )
//     }
  
// }