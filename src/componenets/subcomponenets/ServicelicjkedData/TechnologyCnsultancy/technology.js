import React from "react";
import "./technlogy.css";
import TechData from "./data/technology";
import Techs from "./Tech";
function Technology(){
    return(
        <div className="tech-container">
        {TechData.map((tech,index)=>{
            return(
                <Techs 
                key={index}
                id={tech.id}
                name={tech.name}
                image={tech.Image}
                desc={tech.description} />
            );
        })}
        </div>
    );
}
export default Technology;