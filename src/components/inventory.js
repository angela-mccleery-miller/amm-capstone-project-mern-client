import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateHome from "./components/create-home";
import EditHome from "./components/edit-home";
import HomesList from "./components/homes-list";

// import App from "../App";

class LandingPage extends Component {
  render() {
    return (
     
        <Router>
        <div className="container">
         
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
          <Link to="/about-us" className="navbar-brand">Icelandic Custom Homes</Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">
                  <Link to="/homes-list" className="nav-link">Inventory</Link>
                </li> 

                <li className="navbar-item">
                  <Link to="/create-home" className="nav-link">Create Home</Link>
                </li>

                <li className="navbar-item">
                  <Link to="/gallery" className="nav-link">Gallery</Link>
                </li>
              
              </ul>
            </div>
          </nav>
          
        
          <Route exact path="/homes-list/:id" component={HomesList} />
          <Route path="/edit-home/:id" component={EditHome} />
          <Route path="/create-home" component={CreateHome} />
          <Route path="/gallery" component={Gallery} />
        </div>
       
      </Router>
    )
  }
}
 

export default LandingPage;
