import React, {useContext} from "react";
import { useList } from "hooks/useList";

const listContext = React.createContext();

export function ListProvider({children}){
    const list = useList();
    return (
        <listContext.Provider value={list}>{children}</listContext.Provider>
    )
}

export function ListConsumer(){
    const context = useContext(listContext);
    if(!context){
        throw new Error('useList debe estar dentro del proveedor ListProvider');
    }
    return context;
}