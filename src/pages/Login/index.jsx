import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "firebase";
import { useLocation } from "react-router";
import "./styles.scss";
import { Input } from "components/Input";
import { Button } from "components/Button";

export function Login({isAuthenticated, login}){
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate()
    const locate = useLocation();
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value,passwordRef.current.value)
        .then( () => {
            login();
        }).then( () => {
            navigate(locate?.state?.pathname ?? '/');
        })
        .catch( err => {
            console.log(err);
        })
    }
    if(isAuthenticated){
        return (
            <>
                Bienvenido {auth.currentUser.displayName}
                <Link to="/">Ir a la aplicación</Link>
            </>
        )
    }else{
        return (
            <div className="login">
                <form className="login__form form" onSubmit={e => signIn(e)} action="">
                    <Input placeholder="Introduce tu email" Ref={emailRef} type="email"/>
                    <Input placeholder="Introduce tu contraseña" Ref={passwordRef} type="password" />
                    <Button input={true} value="Iniciar Sesión"/>
                </form>
                <p className="login__register">¿No estas registrado? <Link to="/register">Registrarse</Link></p>
            </div>
        );
    }
}