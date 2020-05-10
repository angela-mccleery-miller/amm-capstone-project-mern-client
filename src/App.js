import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateHome from "./components/create-home.component";
import EditHome from "./components/edit-home.component";
import HomesList from "./components/homes-list.component";
// import SlideImages from "./components/gallery";

// import NavigationContainer from "../navigation/navigation-container";

// import Logo from "./images/logo.png";

// const icon = (
//   <span class="logo">
//     <a href="/">
//       <img src="C:\C\Users\Angela Miller\Desktop\CODING\REACT\amm-capstone-project\mern-client\src\images\logo.png" height="33" width="120" alt="text here" /></a>
//   </span>
// );

class App extends Component {
  render() {
    return (
        <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <Navbar brand={icon} toggleNavKey={0}></Navbar> */}
            {/* <a className="navbar-brand" target="_blank">
              <img src={logo} width="30" height="30" alt="IcelandicLogo" />
            </a> */}
                    
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
          
          {/* nav
          <h2>Home Builders App</h2> */}
          {/* <Route path="/images/logo.png" exact component={Logo} /> */}
          <Route path="/" exact component={HomesList} />
          <Route path="/edit/:id" component={EditHome} />
          <Route path="/create" component={CreateHome} />
          {/* <Route path="/gallery" component={Gallery} /> */}
        </div>
       
      </Router>
    );
  }
}
 

export default App;