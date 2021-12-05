import {useMemo, useState} from "react";
import {auth} from "firebase";

export function useAuth(){
    const [user, setUser] = useState(null);
    const login = () => {
        auth.onAuthStateChanged( userAuth => {
            if(userAuth){
                setUser(userAuth);
            }
        })
    }
    const logout = () => {
        auth.signOut();
        setUser(null);
    }
    return useMemo(() => ({user, login, logout}),[user]);
}