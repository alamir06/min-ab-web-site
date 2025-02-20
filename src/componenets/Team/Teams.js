import React from "react";
import {Link} from "react-router-dom";

function Teams(props)
{
    return(
        <div className="team-data">
                        <div className="team-image">
                            <img src={props.image} alt="kaleab mezgebu" />
                        </div>
                        <div className="team-name">
                            <h1>{props.name}</h1>
                        </div>
                        <div className="team-jobs">
                            <h2>{props.job}</h2>
                        </div>
                        <div className="team-social-media">
                        <div> <a  href=""><img className="first-icon" src={props.Twitter} /></a></div>
                           <div> <a href=""><img  className="first-icon" src={props.Linkedin} /></a></div>
                           <div> <a href=""><img className="first-icon" src={props.web} /></a></div>
                        </div>
                        
                    </div>
    );
}
export default Teams;