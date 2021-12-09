import {useEffect, useMemo, useState} from "react";
import {auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase";

export function useAuth(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState({img: true, name: true});
    useEffect( () => {
        auth.onAuthStateChanged( userAuth => {
            if(userAuth){
                let data = {
                    uid: userAuth.uid,
                    name: userAuth.displayName,
                    email: userAuth.email,
                    img: userAuth.photoURL
                }
                setUser(data);
                setLoading({img:false, name:false});
            }else{
                setUser(null);
            }
        })
    },[])

    const login = async (email,password) => await signInWithEmailAndPassword(auth, email, password);

    const register = async (name, email,password) => {
        setLoading({img:true, name:true});
        await createUserWithEmailAndPassword(auth, email, password)
        .then( (userAuth) => {
            updateProfile( userAuth.user, {
                displayName: name
            })
            .then( () => {
                let data = {
                    uid: userAuth.uid,
                    name: userAuth.displayName,
                    email: userAuth.email,
                    img: userAuth.photoURL
                }
                setUser(data);
                setLoading({img:false, name:false});
            })
        })
    }

    const logout = () =>  auth.signOut();
    
    return useMemo(() => ({user, loading, setLoading, setUser, login, register, logout}),[user,loading]);
}