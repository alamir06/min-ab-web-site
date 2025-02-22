import React from "react";
import "./services.css";
import ServicesDta from "./serviceData";
import Service from "./Service";
import Outsorce from "../subcomponenets/ServicelicjkedData/outsourcing/outsource";
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
        {/* <Outsorce /> */}

        </div>
        </section>
    );
}
export default Services;