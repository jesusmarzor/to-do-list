import React from "react";
import "./styles.scss";

export function Button({value,input=false, click}){
    return (input)? <input type="submit" className="button" value={value}/> :  <button onClick={click} className="button">{value}</button>
}