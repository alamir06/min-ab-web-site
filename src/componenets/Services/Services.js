import React from "react";
import "./services.css";
import {Link} from "react-router-dom";
import ServicesDta from "./serviceData";
import Service from "./Service";
function Services(){
    return (
        <section id="services">
        <div className="services-container">
        <div className="service-text">
            <p>Services</p>
        </div>
        <div className="service-lists">
        {ServicesDta.map((service,index)=>{
            return(
                <Service
                index={index}
                image={service.image}
                title={service.title}
                desc={service.description} />
            );
        })}
        
        </div>
        </div>
        </section>
    );
}
export default Services;