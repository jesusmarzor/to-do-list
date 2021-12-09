import Logo from "components/Logo";
import React from "react";
import { User } from "components/User";
import {AuthConsumer} from "contexts/AuthContext";
import "./styles.scss";

export function Header(){
    const {user} = AuthConsumer();
    return(
        <header className="header">
            <nav className="header__nav">
                <Logo/>
                {
                    (user !== null)
                    ?
                    
                        <User/>
                    :
                    null
                }
            </nav>
        </header>
    )
}