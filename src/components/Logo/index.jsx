import React from "react";
import logo from "assets/img/check.png";
import "./styles.scss";
import { Link } from "react-router-dom";

function Logo(){
    return(
        <Link to="/" className="logo">
            <h1 className="logo__text">To do list</h1>
            <img className="logo__img" src={logo} alt="check"/>
        </Link>
    )
}

export default React.memo(Logo);