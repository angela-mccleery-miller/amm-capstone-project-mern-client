import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateHome from "./components/create-home.component";
import EditHome from "./components/edit-home.component";
import HomesList from "./components/homes-list.component";
// import App from "../App";

class LandingPage extends Component {
  render() {
    return (
        // <div className="logo">
        //     <img src={Logo} />
        // </div>
        <Router>
        <div className="container">
         
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
          <Link to="/homepage" className="navbar-brand">Icelandic Custom Homes</Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">
                  <Link to="/homes-list.component" className="nav-link">Inventory</Link>
                </li> 

                <li className="navbar-item">
                  <Link to="/create-home.component" className="nav-link">Create Home</Link>
                </li>

                <li className="navbar-item">
                  <Link to="/gallery" className="nav-link">Gallery</Link>
                </li>
              
              </ul>
            </div>
          </nav>
          
        
          <Route exact path="/homes-list.component/:id" component={HomesList} />
          <Route path="/edit-home.component/:id" component={EditHome} />
          <Route path="/create-home.component" component={CreateHome} />
          {/* <Route path="/gallery" component={Gallery} /> */}
        </div>
       
      </Router>
    )
  }
}
 

export default LandingPage;