import React from "react";


function Project(props)
{
    return(
        <div className="P-lists">
        <div className="project-image">
            <img src={props.image} alt="" />
        </div>
        <div className="project-details">
            <div className="project-name">
                <h1>{props.name}</h1>
            </div>
            <div className="project-description">
                <p>{props.description}</p>
            </div>
            <div className="project-link">
            <a href="#"><span>Explore More</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-primary-minab-2 font-bold dark:text-secondary-navbar"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </a>
             </div>
        </div>
       
    </div>
    );
}
export default Project;