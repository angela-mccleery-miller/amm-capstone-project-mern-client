import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/homepage.scss";
import "./styles/gallery.scss";

import CreateHome from "./components/create-home.component";
import EditHome from "./components/edit-home.component";
import HomesList from "./components/homes-list.component";
import logo from "./images/logo.png";
import GalleryContainer from './components/gallery';


// import NavigationContainer from "../navigation/navigation-container";


export default class App extends Component {
  // constructor() {
  //   super();

  // }

  render() {
    return (
        <Router>
        <div className="container">
          <div className='logo'>
              <img id="logoImg" src={logo} alt="myLogo" />
          </div>
        
          <nav id="navHome" className="navbar navbar-expand-lg navbar-light">
                                
            <Link to="/" className="navbar-brand">Icelandic Custom Homes</Link>
            
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Inventory</Link>
                </li> 
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/gallery" className="nav-link">Gallery</Link>
                </li>
              
              </ul>
            </div>
          </nav>
    
          <Route path="/" exact component={HomesList} />
          <Route path="/create" component={CreateHome} />
          <Route path="/edit/:id" component={EditHome} />
          <Route path="/gallery" component={GalleryContainer} />
        </div>
       
      </Router>
    );
  }
}
 