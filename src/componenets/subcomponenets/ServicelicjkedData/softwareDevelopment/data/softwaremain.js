import React from "react";
import sofImage from "../../../../../asset/images/s1.webp";
import SoftwareData from "./SoftwareDta";
import Software from "./software";
import "./siftware.css";


function SoftwareMain(){
    return(
        <div className="software-container">
            <div className="soft-data">
                <div className="soft-main">
                    <div className="software-desc">
                        <div className="sof-tite">
                            <h1>Software Development</h1>
                        </div>
                        <div className="sof-description">
                            <p>Minab is a reputable firm in delivering various types of software development services based on both liners as well as dynamic specifications from our clients following all the industry standards and procedures. Our team has extensive experience in large-scale service cloud platforms that involve multi-stakeholders both in the development and operation period. We also offer initiation, upgrade, and modification of existing platforms following guidelines from our clients or ones proposed by us. In addition, we implement enterprise solutions platforms both as self-hosted and following software as a service model on a subscription basis based on the automation scale needs of our clients.</p>
                        </div>
                    </div>
                    <div className="sof-image">
                        <img src={sofImage} alt="software develoment"/>
                    </div>
                </div>
                <div className="software-lists">
                  {SoftwareData.map((sofdata,index)=>{
                    return(
                        <Software 
                        key={index}
                        name={sofdata.name}
                        sofImage={sofdata.iamge}
                        desc={sofdata.deacription} />
                    );
                  })}
                </div>
            </div>
        </div>
    );
}
export default SoftwareMain;