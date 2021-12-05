import Logo from "components/Logo";
import React from "react";
import { User } from "components/User";
import "./styles.scss";

export function Nav({logout, isAuthenticated}){
    return(
        <nav className="nav">
            <Logo/>
            {
                (isAuthenticated)
                ?
                <User logout={logout}/>
                :
                null
            }
        </nav>
    )
}