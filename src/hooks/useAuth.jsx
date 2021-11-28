import {useState} from "react";
import {auth} from "firebase";

export function useAuth(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = () => {
        auth.onAuthStateChanged( userAuth => {
            if(userAuth){
                setIsAuthenticated(true);
            }
        })
    }
    const logout = () => {
        auth.signOut();
        setIsAuthenticated(false);
    }
    return {isAuthenticated, login, logout}
}