import { Spinner } from "components/Spinner";
import React from "react";
import "./styles.scss";

export function Button({loading=false, value,input=false, click}){
    return (
    (input)
    ?
        (loading)
        ?
        <input type="submit" className="button" value={<Spinner min={true}/>}/>
        :
        <input type="submit" className="button" value={value}/>
    :
        (loading)
        ?
            <button onClick={click} className="button">{<Spinner min={true}/>}</button>
        :
            <button onClick={click} className="button">{value}</button>
    )
}