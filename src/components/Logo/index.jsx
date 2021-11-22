import React from "react";
import logo from "./check.png";
import "./styles.scss";

function Logo(){
    return(
        <div className="logo">
            <h1 className="logo__text">To do list</h1>
            <img className="logo__img" src={logo} alt="check"/>
        </div>
    )
}

export default React.memo(Logo);