import React from "react";
import { auth } from "firebase";
import { Button } from "components/Button";
import "./styles.scss";

export function User({logout}){
    return (
        <div className="user">
            <p className="user__name">{auth.currentUser.displayName}</p>
            <Button click={logout} value="Cerrar Sesion"/>
        </div>
    )
}