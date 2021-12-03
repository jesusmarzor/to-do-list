import Logo from "components/Logo";
import React from "react";
import { User } from "components/User";
import "./styles.scss";

export function Nav({logout}){
    return(
        <nav className="nav">
            <Logo/>
            <User logout={logout}/>
        </nav>
    )
}