import React from "react";

const Home = props => {
    const { id, planName, bedrooms, bathroom, sqfeet, url, fp1_url, fp2_url } = props.home
    return (
        <div key={id} className="home-container">
          <div className="home-wrapper">
            <img className="home-img" src={"../images/gardabaer.png"} alt="Gardabaer Img" />        
            <div>
                <h2>{planName}</h2>
            </div>
            <div>
                <p>{props.home}</p>
            </div>
          </div>
        </div>
    );   
}

export default Home;
© 2020 GitHub, Inc.