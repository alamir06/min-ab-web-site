import React from "react";


function Service(props){
    return(
        <div className="services-list">
            <div className="image-container">
                <img src={props.image} alt="Technology Consultancy" />
            </div>
            <div className="list-title">
                <p>{props.title}</p>
            </div>
            <div className="list-description">
            <p>{props.desc}</p>
            </div>
            <div className="service-more-link">
                <a href="#">Explore More</a>
            </div>
        </div>
    );
}
export default Service;