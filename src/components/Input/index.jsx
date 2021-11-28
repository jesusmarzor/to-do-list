import React from "react";
import "./styles.scss";

export function Input({type, Ref, placeholder}){
    return <input className="input" ref={Ref} placeholder={placeholder} type={type}/>
}