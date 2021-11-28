import React from "react";
import logo from "assets/img/check.png";
import "./styles.scss";

export function Logo(){
    return(
        <div className="logo">
            <h1 className="logo__text">To do list</h1>
            <img className="logo__img" src={logo} alt="check"/>
        </div>
    )
}