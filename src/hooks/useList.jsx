import { useState } from "react"

export function useList(){
    if(localStorage.getItem('tasks') === null)
        localStorage.setItem('tasks',JSON.stringify([]));
    const [list, setList] = useState(JSON.parse(localStorage.getItem('tasks')));
    const addTask = (newTask) => {
        if(newTask !== '' ){
            let exist = false;
            JSON.parse(localStorage.getItem('tasks')).map(( {title} ) => {
                if(title === newTask){
                    exist = true;
                }
                return exist;
            })
            if(!exist){
                let listModified = [{ title: newTask, done: false }, ...JSON.parse(localStorage.getItem('tasks'))];
                localStorage.setItem('tasks', JSON.stringify(listModified));
                setList(listModified);
                return true;
            }
        }
        return false;
    }
    const editTask = (taskTitle, newTitle) => {
        if(!list.includes(newTitle) && newTitle !== ''){
            let listModified = JSON.parse(localStorage.getItem('tasks'));
            let ind = null;
            listModified.map( ({title, done}, index) => {
                if(title === taskTitle){
                    ind = index;
                }
                return {title,done};
            })
            if(ind !== null){
                listModified.splice(ind,1,{title: newTitle, done: listModified[ind].done})
                localStorage.setItem('tasks',JSON.stringify(listModified));
                setList(listModified);
                return true;
            }
            return false;
        }
    }
    const deleteTask = (deleteTask) => {
        let listModified = JSON.parse(localStorage.getItem('tasks')).filter( ({title}) => deleteTask !== title);
        localStorage.setItem('tasks',JSON.stringify(listModified));
        setList(listModified);
    }
    const setTaskCheck = (taskTitle) => {
        let listModified = JSON.parse(localStorage.getItem('tasks'));
        let ind = null;
        let check = false;
        listModified.map( ({title, done},index) => {
            if(title === taskTitle){
                ind = index;
                check = done;
            }
            return {title, done};
        })
        if(ind !== null){
            listModified.splice(ind,1,{title: taskTitle, done: !check})
            localStorage.setItem('tasks',JSON.stringify(listModified));
            setList(listModified);
        }
    }
    const deleteTasksCheck = () => {
        let listModified = JSON.parse(localStorage.getItem('tasks')).filter( ({done}) => done !== true);
        localStorage.setItem('tasks',JSON.stringify(listModified));
        setList(listModified);
    }
    return {list, addTask, editTask, deleteTask, setTaskCheck, deleteTasksCheck};
}