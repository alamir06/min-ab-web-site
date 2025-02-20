import React from "react";
import "./Tean.css";
import TeamData from "./TeamData";
import Teams from "./Teams";
function Team()
{
    return(
        <section id="team">
        <div className="team-container">
            <div className="team-note">
                <div className="team-title">
                    <h1>Meet the Team</h1>
                </div>
                <div className="team-text">
                    <p>Introducing one of the best software development and technical operation 
                    team in the Ethiopian technology service market. Our team constitutes 
                    a diverse set of talent and expertise to tackle our client's challenges and solution needs.</p>
                </div>
            </div>
            <div className="team-memebrer">
            {TeamData.map((team,index)=>{
                return(
                    <Teams key={index}
                    name={team.name}
                    job={team.job}
                    image={team.image}
                    Twitter={team.Twitter}
                    Linkedin={team.Linkedin}
                    web={team.WWW}
                     />
                )
            })
            }
            <div className="Team-more-link">
                            <a href="#">More Team Members</a>
                        </div>
            </div>
            
            </div> 
        </section>
    );
}
export default Team;