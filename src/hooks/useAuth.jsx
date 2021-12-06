import {useEffect, useMemo, useState} from "react";
import {auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase";

export function useAuth(){
    const [user, setUser] = useState(null);
    useEffect( () => {
        auth.onAuthStateChanged( userAuth => {
            if(userAuth){
                setUser(userAuth);
            }else{
                setUser(null);
            }
        })
    },[])

    const login = async (email,password) => await signInWithEmailAndPassword(auth, email, password);

    const register = async (name, email,password) => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then( (userAuth) => {
            updateProfile( userAuth.user, {
                displayName: name
            })
        })
    }

    const logout = () =>  auth.signOut();
    
    return useMemo(() => ({user, login, register, logout}),[user]);
}