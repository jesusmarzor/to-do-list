import React, { useRef, useState } from "react";
import logo from "assets/img/check.png";
import { ListConsumer } from "contexts/ListContext";
import "./styles.scss"

function Task({id, title, done}){
    const { editTask, deleteTask, setTaskCheck } = ListConsumer();
    const [taskTitle, setTaskTitle] = useState(title);
    const [writing, setWriting] = useState(taskTitle);
    const [editMode,setEditMode] = useState(false);
    const editRef = useRef(null);
    const saveRef = useRef(null);
    const inputEditRef = useRef(null);
    const titleRef = useRef(null);
    const checkboxRef = useRef(null);
    const logoRef = useRef(null);
    const handleChangeEdit = (e) => {
        setWriting(e.target.value);
    }
    const clickDeleteButton = () => {
        deleteTask(id);
    }
    const changeEditMode = () => {
        editRef.current.classList.toggle('vanish');
        saveRef.current.classList.toggle('vanish');
        if(editMode){
            if(editTask(id, writing)){
                setTaskTitle(writing);
            }
        }
        setEditMode( editMode ? false : true );
        inputEditRef.current.classList.toggle('vanish');
        if(!inputEditRef.current.classList.contains('vanish')){
            inputEditRef.current.focus();
        }
        titleRef.current.classList.toggle('vanish');
    }
    const taskClick = () => {
        if(!editMode){
            setTimeout(()=>{
                logoRef.current.classList.toggle('vanish');
                titleRef.current.classList.toggle('check');
                checkboxRef.current.classList.toggle('vanish');
            },150)
            if(logoRef.current.classList.contains('vanish')){
                logoRef.current.classList.add('appearCheck');
                logoRef.current.classList.remove('vanishCheck');
                checkboxRef.current.classList.add('vanishCheck');
                checkboxRef.current.classList.remove('appearCheck');
            }else{
                logoRef.current.classList.add('vanishCheck');
                logoRef.current.classList.remove('appearCheck');
                checkboxRef.current.classList.add('appearCheck');
                checkboxRef.current.classList.remove('vanishCheck');
            }
            setTaskCheck(id);
        }
    }
    return(
        <div className="task">
            <div onClick={taskClick} className="task_values values">
                {
                    (done)
                    ?
                        <input ref={checkboxRef} className="values__check vanish" type="checkbox"/>
                    :
                        <input ref={checkboxRef} className="values__check" type="checkbox"/>
                }
                {
                    (done)
                    ?
                        <img ref={logoRef} className="values__logo" src={logo} alt="check"/>
                    :
                        <img ref={logoRef} className="values__logo vanish" src={logo} alt="check"/>
                }
                {
                    (done)
                    ?
                        <p ref={titleRef} className="values__title check">{taskTitle}</p>
                    :
                        <p ref={titleRef} className="values__title">{taskTitle}</p>
                }
                <input className="values__input vanish" onChange={handleChangeEdit} ref={inputEditRef} type="text" value={writing} maxLength="35"/>
            </div>
            <div className="task__buttons buttons">
                <svg ref={editRef} className="buttons__button" onClick={changeEditMode} fill="#93c08c" viewBox="0 0 30 30" width="25px" height="25px"><path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"/></svg>
                <svg ref={saveRef} className="buttons__button vanish" onClick={changeEditMode} fill="#93c08c" viewBox="0 0 30 30" width="25px" height="25px"><path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 8 L 22 4 L 20 4 L 20 10 C 20 10.552 19.552 11 19 11 L 10 11 C 9.448 11 9 10.552 9 10 L 9 4 L 6 4 z M 16 4 L 16 9 L 18 9 L 18 4 L 16 4 z M 10 16 L 20 16 C 21.105 16 22 16.895 22 18 L 22 24 L 8 24 L 8 18 C 8 16.895 8.895 16 10 16 z"></path></svg>
                <svg className="buttons__button" onClick={clickDeleteButton} viewBox="0 0 48 48" width="25px" height="25px"><path fill="#93c08c" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"/><path fill="#93c08c" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"/></svg>
            </div>
        </div>
    )
}
export default React.memo(Task);