import React, {useState} from "react";
import "./Timebar.css"



const Timebar = ({height}) => {

    console.log('got new height', height)

    return (
        <div className="Timebar-wrapper">
            <div style={{height}} className="Timebar"></div>
        </div>
    )
}

export default Timebar;
