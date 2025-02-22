import React from "react";


function Techs(props)

{
    return(
        <div className={props.id%2==0 ? "tech-dataeven":"tech-data" }>
            <div className="tch-descriptiom">
                <div className="tech-title">
                    <h1>{props.name}</h1>
                </div>
                <div className="tech-decriptons">
                    <p>{props.desc}</p>
                </div>
            </div>
            <div className="tech-image">
                <img src={props.image} alt="" />
            </div>
        </div>

    );
}

export default Techs;