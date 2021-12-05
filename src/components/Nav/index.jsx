import Logo from "components/Logo";
import React from "react";
import { User } from "components/User";
import {AuthConsumer} from "contexts/AuthContext";
import "./styles.scss";

export function Nav(){
    const {user} = AuthConsumer();
    return(
        <nav className="nav">
            <Logo/>
            {
                (user !== null)
                ?
                <User/>
                :
                null
            }
        </nav>
    )
}