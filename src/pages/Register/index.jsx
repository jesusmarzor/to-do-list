import React, {useRef} from "react";
import { auth, createUserWithEmailAndPassword, updateProfile } from "firebase";
import { useNavigate } from "react-router-dom";
import { Input } from "components/Input";
import { Button } from "components/Button";
import {AuthConsumer} from "contexts/AuthContext";
import "./styles.scss";

export function Register(){
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const {login} = AuthConsumer();
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value,passwordRef.current.value)
        .then( (userAuth) => {
            updateProfile( userAuth.user, {
                displayName: nameRef.current.value
            }).then( () => {
                login();
            }).then( () => {
                navigate('/')
            })
        })
        .catch( err => {
            console.log(err);
        })
    }
    return (
        <div className="register">
            <h1 className="register__title">Registrarse</h1>
            <form className="register__form" onSubmit={e => signUp(e)} action="">
                <Input placeholder="Introduce tu nombre" Ref={nameRef} type="text"/>
                <Input placeholder="Introduce tu email" Ref={emailRef} type="email"/>
                <Input placeholder="Introduce tu contraseña" Ref={passwordRef} type="password" />
                <Button input={true} value="Registrarse"/>
            </form>
        </div>
      );
}