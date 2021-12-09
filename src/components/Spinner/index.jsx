import React from "react";
import "./styles.scss";

export function Spinner({min = false}){
    return (min) ? <div className="spinner spinner__min"></div> : <div className="spinner"></div>
}