// import React from 'react';
// import { Slide } from 'react-slideshow-image';

// import HomeList from './homes-list.component';
// import Gardabaer from "./images/gardabaer.jpg";
// import Glacierview from "./images/glacierview.jpg";
// import Grindavik from "./images/grindavik.jpg";
// import Husavik from "./images/husavik.jpg";
// import Icelandia from "./images/icelandia.jpg";
// import NorthernLights from "./images/northernLights.jpg";
// import Reykjavik from "./images/reykjavik.jpg";
// import Selfoss from "./images/selfoss.jpg";
// import VolcanicOne from "./images/volcanicOne.jpg";
// import VolcanicTwo from "./images/volcanicTwo.jpg";


// export default class HomesList extends Component {

//   constructor(props) {
//       super(props);
//       this.state = {homes: []};
//   } 


// const homeImages = [
//     <img src="./images/gardabaer.jpg"/>,
//     <img src="./images/glacierview.jpg"/>,
//     <img src="./images/grindavik.jpg"/>,
//     <img src="./images/husavik.jpg"/>,
//     <img src="./images/icelandia.jpg"/>,
//     <img src="./images/northernLights.jpg"/>,
//     <img src="./images/reykjavik.jpg"/>,
//     <img src="./images/selfoss.jpg"/>,
//     <img src="./images/volcanicOne.jpg"/>,
//     <img src="./images/volcanicTwo.jpg"/>,

// ];
 
// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   pauseOnHover: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   }
// }
 
// const Slideshow = () => {
//   render() {
//     return (
//       <div className="slide-container">
//         <Slide {...properties}>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[0]})`}}>
//               <span>Gardabaer</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[1]})`}}>
//               <span>Glacierview</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[2]})`}}>
//               <span>Grindavik</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[0]})`}}>
//               <span>Husavik</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[1]})`}}>
//               <span>Icelandia</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[2]})`}}>
//               <span>NorthernLights</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[0]})`}}>
//               <span>Reykjavik</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[1]})`}}>
//               <span>Selfoss</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[2]})`}}>
//               <span>VolcanicOne</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${homeImages[2]})`}}>
//               <span>VolcanicTwo</span>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     )
// }}