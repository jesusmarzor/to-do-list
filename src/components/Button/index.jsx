import React from "react";
import "./styles.scss";

export function Button({value,input=false, click}){
    if(input){
        return (
            <input type="submit" className="button" value={value}/>
        )
    }else{
        return (
            <button onClick={click} className="button">{value}</button>
        )
    }
}