import React from "react";


function Outsorcec(props)
{
    return(
        <div className="source-lists">
        <img src={props.img}alt="" />
        <h1 >{props.name}</h1>
        <p>{props.desc}</p>
        </div>
    );
}
export default Outsorcec;