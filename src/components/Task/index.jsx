import React, { useEffect, useRef, useState } from "react";
import logo from "../Logo/check.png";
import "./styles.scss"

function Task({title}){
    const title_ref = useRef();
    const check_ref = useRef();
    const logo_ref = useRef();
    useEffect(()=>{
        
    },[title_ref, check_ref, logo_ref])
    const taskClick = () => {
        setTimeout(()=>{
            logo_ref.current.classList.toggle('vanish');
            check_ref.current.classList.toggle('vanish');
            title_ref.current.classList.toggle('check');
        },300)
        if(logo_ref.current.classList.contains('vanish')){
            logo_ref.current.classList.add('aparition');
            logo_ref.current.classList.remove('desaparition');
            check_ref.current.classList.add('desaparition');
            check_ref.current.classList.remove('aparition');
        }else{
            logo_ref.current.classList.add('desaparition');
            logo_ref.current.classList.remove('aparition');
            check_ref.current.classList.add('aparition');
            check_ref.current.classList.remove('desaparition');
        }
    }
    return(
        <div onClick={taskClick} className="task">
            <input ref={check_ref} className="task__check" type="checkbox"/>
            <img ref={logo_ref} className="task__logo vanish" src={logo} alt="check"/>
            <p ref={title_ref} className="task__title">{title}</p>
        </div>
    )
}
export default React.memo(Task, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});