import React, {useRef} from "react";
import { auth, createUserWithEmailAndPassword, updateProfile } from "firebase";
import { useNavigate } from "react-router-dom";
import Logo from 'components/Logo';
import { Input } from "components/Input";
import { Button } from "components/Button";
import "./styles.scss";

export function Register({login}){
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value,passwordRef.current.value)
        .then( () => {
            updateProfile( auth.currentUser, {
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
        <>
            <Logo/>
            <form className="register" onSubmit={e => signUp(e)} action="">
                <Input placeholder="Introduce tu nombre" Ref={nameRef} type="text"/>
                <Input placeholder="Introduce tu email" Ref={emailRef} type="email"/>
                <Input placeholder="Introduce tu contraseña" Ref={passwordRef} type="password" />
                <Button input={true} value="Registrarse"/>
            </form>
        </>
      );
}