import React, {useContext} from "react";
import { useAuth } from "hooks/useAuth";

const authContext = React.createContext();

export function AuthProvider({children}){
    const auth = useAuth();
    return (
        <authContext.Provider value={auth}>{children}</authContext.Provider>
    )
}

export function AuthConsumer(){
    const context = useContext(authContext);
    if(!context){
        throw new Error('useAuth debe estar dentro del proveedor AuthProvider');
    }
    return context;
}