import React from "react";
import check from "assets/img/check.png";
import "./styles.scss";

export function Loading(){
    return(
        <div className="loading">
            <h1 className="loading__h1">To do list</h1>
            <img className="loading__check" src={check} alt="check"/>
        </div>
    )
}