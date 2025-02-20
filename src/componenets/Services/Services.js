import React from "react";
import "./services.css";
import {Link} from "react-router-dom";
import consultImage from "../../asset/images/consult.png";
import codingImage from "../../asset/images/coding.png";
import resourceImage from "../../asset/images/consult.png";
function Services(){
    return (
        <section id="services">
        <div className="services-container">
        <div className="service-text">
            <p>Services</p>
        </div>
        <div className="service-lists">
        <div className="services-list">
            <div className="image-container">
                <img src={consultImage} alt="Technology Consultancy" />
            </div>
            <div className="list-title">
                <p>Technology Consultancy</p>
            </div>
            <div className="list-description">
            <p>
            Minab offers technical consultancy services to both local and
             international organizations in three primary areas, 
            data collection and analysis, process automation, and standard operation procedure designs
            </p>
            </div>
            <div className="list-lik">
                {/* <Link to={''}>Explore</Link> */}
            </div>
        </div>
        <div className="services-list">
            <div className="image-container">
                <img src={codingImage} alt="Software Development" />
            </div>
            <div className="list-title">
                <p>Software Development
                </p>
            </div>
            <div className="list-description">
            <p>
            Minab is a reputable firm in delivering various types of 
            software development services based on both liners as well 
            as dynamic specifications from our clients following all the 
            industry standards and procedures.</p>
            </div>
            <div className="list-lik">
                {/* <Link to={''}>Explore</Link> */}
            </div>
        </div>
        <div className="services-list">
            <div className="image-container">
                <img src={resourceImage} alt="Outsourcing" />
            </div>
            <div className="list-title">
                <p>Outsourcing</p>
            </div>
            <div className="list-description">
            <p>
            Minab offers developer hours, offshore dedicated developer capacity, 
            and organization IT department outsourcing 
            services to all corporations through our 
            well-experienced team in the sector of operation. </p>
            </div>
            <div className="list-lik">
                {/* <Link to={''}>Explore</Link> */}
            </div>
        </div>
        </div>
        </div>

        </section>
    );
}
export default Services;