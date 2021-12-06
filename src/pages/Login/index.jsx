import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import "./styles.scss";
import { Input } from "components/Input";
import { Button } from "components/Button";
import {AuthConsumer} from "contexts/AuthContext";

export function Login(){
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate()
    const locate = useLocation();
    const {login} = AuthConsumer();
    const signIn = (e) => {
        e.preventDefault();
        login(emailRef.current.value,passwordRef.current.value)
        .then( () => {
            navigate(locate?.state?.pathname ?? '/');
        })
    }
    return (
        <>
            <div className="login">
                <h1 className="login__title">Iniciar Sesión</h1>
                <form className="login__form form" onSubmit={e => signIn(e)} action="">
                    <Input placeholder="Introduce tu email" Ref={emailRef} type="email"/>
                    <Input placeholder="Introduce tu contraseña" Ref={passwordRef} type="password" />
                    <Button input={true} value="Iniciar Sesión"/>
                </form>
                <p className="login__register">¿No estas registrado? <Link to="/register">Registrarse</Link></p>
            </div>
        </>
    );
}