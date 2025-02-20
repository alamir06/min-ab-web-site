import React from "react";
import "./Tean.css";
import kaleb from "../../asset/images/Kaleab_Mezgeb_Option_2_wguk8v.webp";
import michael from "../../asset/images/michael_sahelu_uvkezd.webp";
import bereket from "../../asset/images/bereket.webp";
import natnael from "../../asset/images/natnael_yared_f8kcex.webp";
import dereje from "../../asset/images/dereje_fikru_gbll1d.webp";
import mussie from "../../asset/images/mussie_teshome_ukkkpd.webp";
import twitter from "../../asset/images/twitter-purple.svg";
import linkedin from "../../asset/images/linkedin-purple.svg";
import web from "../../asset/images/web-purple.svg";

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
            <div className="team-data">
                <div className="team-image">
                    <img src={kaleb} alt="kaleab mezgebu" />
                </div>
                <div className="team-name">
                    <h1>Kaleab mezgebu</h1>
                </div>
                <div className="team-jobs">
                    <h2>co-Founder and COO</h2>
                </div>
                <div className="team-social-media">
                <div> <a  href=""><img className="first-icon" src={twitter} /></a></div>
                   <div> <a href=""><img  className="first-icon" src={linkedin} /></a></div>
                   <div> <a href=""><img className="first-icon" src={web} /></a></div>
                </div>
            </div>
            <div className="team-data">
                <div className="team-image">
                    <img src={kaleb} alt="kaleab mezgebu" />
                </div>
                <div className="team-name">
                    <h1>Kaleab mezgebu</h1>
                </div>
                <div className="team-jobs">
                    <h2>co-Founder and COO</h2>
                </div>
                <div className="team-social-media">
               
                    <a href=""><img src="" /></a>
                    <a href=""><img src="" /></a>
                    <a href=""><img src="" /></a>
                </div>
            </div>
            <div className="team-data">
                <div className="team-image">
                    <img src={kaleb} alt="kaleab mezgebu" />
                </div>
                <div className="team-name">
                    <h1>Kaleab mezgebu</h1>
                </div>
                <div className="team-jobs">
                    <h2>co-Founder and COO</h2>
                </div>
                <div className="team-social-media">
                    <a href=""><img src="" /></a>
                    <a href=""><img src="" /></a>
                    <a href=""><img src="" /></a>
                </div>
            </div>
            <div className="team-data">
                <div className="team-image">
                    <img src={kaleb} alt="kaleab mezgebu" />
                </div>
                <div className="team-name">
                    <h1>Kaleab mezgebu</h1>
                </div>
                <div className="team-jobs">
                    <h2>co-Founder and COO</h2>
                </div>
                <div className="team-social-media">
                    <a href=""><img src="" /></a>
                    <a href=""><img src="" /></a>
                    <a href=""><img src="" /></a>
                </div>
            </div>
            
            
            </div>
            

            </div> 
        </section>
    );
}
export default Team;