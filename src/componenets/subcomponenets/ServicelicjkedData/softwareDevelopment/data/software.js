import React from "react";


function Software(props)
{
    return(
        <div className="sof-list-title">
        <div className="sof-list-image">
           <img src={props.sofImage} alt=""/>
        </div>
           <div className="sof-list-titles">
               <h1>{props.name}</h1>
           </div>
           <div className="sof-list-desc">
               <p>{props.desc}</p>
           </div>
        </div>

    );
}

export default Software;