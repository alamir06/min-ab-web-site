import React from "react";
import "./projecs.css";
import Project from "./Project";
import ProjectData from "./projectDta";

function Projects(){
    return(
        <section id="project">
            <div className="project-container">
                <div className="project-lists">
                    <div className="project-text">
                    <div className="project-titel">
                          <h1>Projects</h1>
                    </div>
                      <div className="project-description">
                        <p>Below are some of our notable products and projects. We have successfully developed and delivered multiple projects. Among other below are some of our large-scale engagement
                         and products currently actively serving our clients as well as users.</p>
                      </div>
                    </div>
                    <div className="plist" >
                   {ProjectData.map((project,index)=>{
                    return(
                        <Project 
                            key={index}
                            image={project.image}
                            name={project.name}
                            description={project.description}
                        />
                    )
                   })}
                </div>
                <div className="project-more-linkk">
                    <a href="#" >More projects</a>
                </div>
            </div>
            </div>
        </section>
    );
}
export default Projects;