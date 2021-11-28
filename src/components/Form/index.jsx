import React, { useState } from "react";
import "./styles.scss";

export function Form({addTask}){
    const [writing, setWriting] = useState('');
    const changeWriting = (e) => {
        setWriting(e.target.value);
    }
    const addNewTask = (e) => {
        e.preventDefault();
        if(addTask(writing))
            setWriting('');
    }
    return(
        <form className="form" onClick={e => addNewTask(e)}>
            <input className="form__text" value={writing} onChange={e => changeWriting(e)} type="text" maxLength="35"/>
            <input className="form__submit" type="submit" value="Añadir"/>
        </form>
    )
}