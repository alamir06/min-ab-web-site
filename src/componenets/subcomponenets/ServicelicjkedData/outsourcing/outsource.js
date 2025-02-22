import React from "react";
import Outsouredata from "./outsourcedata";
import Outsorcec from "./OutSourcec";
import OutImage from "../../../../asset/images/om.webp"
import "./outsorce.css";

function Outsourece(){
    return(
          <div className="outsource-container">
            <div className="source-list">
            <div className="source-main">
                <div className="source-des">
                    <h1>Outsourcing</h1>
                    <p>Minab offers developer hours, offshore dedicated developer capacity, and organization IT department outsourcing services to all corporations through our well-experienced team in the sector of operation. Through our six months internship program Minab trains fresh graduates and graduating students for an outsourcing developer our needs, in addition also offers dedicated on-call developers trained based on specifications of our clients based in Europe. We also outsource IT departments of large corporations to manage day-to-day support requests of the organization and manage maintenance runs based on a given operation plan communicated on service engagement.</p>
                </div>
                <div className="source-inage">
                    <img src={OutImage} alt="" />
                </div>
            </div>
            <div className="source-listss">
                <h1></h1>
                {Outsouredata.map((out,index)=>{
                    return(
                        <Outsorcec 
                        key={index}
                        name={out.name}
                        img={out.image}
                        desc={out.description} />

                    );
                })}
                           </div>
            </div>
          </div>
    );
}
export default Outsourece;