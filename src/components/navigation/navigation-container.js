import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from "./images/logo.jpg";
// import gallery from "..gallery/gallery.js";


export default class NavigationContainer extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="navigation-wrapper">
               
                <div className='logo'>
                    <img src={logo} />
                </div>

                <div className="links-wrapper">
                    <Link to="/">Gallery</Link>
                    <Link to="./homes-list.component">Inventory</Link>
                     <Link to="./create-home.component">Create Home</Link>

                </div>

                <div className="btn-wrapper-right">
                    <button id="btn3" >Home Page</button>
                    <button id="btn4">Inventory</button>
                    <button id="btn5">Gallery</button>
                    <button id="btn6">Admin</button>
                </div> 
            </div>
        )
    }
}