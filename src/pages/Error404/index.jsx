import React from "react";
import link from "assets/img/error404.png"
import "./styles.scss";
export function Error404(){
  return (
      <div className="error404">
        <h1 className="error404__h1">Error 404</h1>
        <p className="error404__p">Link no responde</p>
        <img className="error404__img" src={link} alt="error 404"/>
      </div>
    );
}