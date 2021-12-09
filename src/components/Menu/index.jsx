import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "components/Button";
import {AuthConsumer} from "contexts/AuthContext";
import "./styles.scss";

export function Menu(){
    const {user, logout} = AuthConsumer()
    const refMenu = useRef(null);
    return(
        <div ref={refMenu} className="menu">
            <p className="menu__name">{user.displayName || user.email}</p>
            <nav className="menu__list list">
                <li className="list__li"><Link to="/profile" className="list__link">Perfil</Link></li>
            </nav>
            <Button click={logout} value="Cerrar Sesión"/>
        </div>
    )
}