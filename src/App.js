import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateHome from "./components/create-home.component";
import EditHome from "./components/edit-home.component";
import HomesList from "./components/homes-list.component";

// import Logo from "../logo.png"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="https://www.realtor.com/" target="_blank"> */}
              {/* <img src={logo} width="30" height="30" alt="logo" /> */}
            {/* </a> */}
            <Link to="/" className="navbar-brand">Home Builders App</Link>
            <div className="collapse nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Homes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Home</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          {/* nav
          <h2>Home Builders App</h2> */}
          <Route path="/" exact component={HomesList} />
          <Route path="/edit/:id" component={EditHome} />
          <Route path="/create" component={CreateHome} />
        </div>
       
      </Router>
    );
  }
}
 

export default App;
