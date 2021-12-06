import { useState, useEffect } from "react"
import { addTaskFirebase, editTaskFirebase, deleteTaskFirebase, deleteTasksFirebase, getTasksFirebase } from "firebase";

export function useList(){
    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        getTasksFirebase().then( tasks => {
            setList(tasks)
            setLoading(false);
        });
    }, [])
    const addTask = (newTask) => {
        if(newTask !== '' ){
            addTaskFirebase({ title: newTask, done: false })
            .then( docRef => {
                let listModified = [{ id: docRef.id, title: newTask, done: false }, ...list];
                setList(listModified);
            })
            return true;
        }
        return false;
    }
    const editTask = (taskID, newTitle) => {
        if(newTitle !== ''){
            let ind = null;
            list.map( ({id}, index) => {
                if(taskID === id){
                    ind = index;
                }
                return id;
            })
            if(ind !== null){
                editTaskFirebase(taskID, {title: newTitle})
                .then( () => {
                    let listModified = list;
                    listModified.splice(ind,1,{id: taskID, title: newTitle, done: listModified[ind].done})
                    setList(listModified);
                })
                return true;
            }
            return false;
        }
    }
    const deleteTask = (taskID) => {
        deleteTaskFirebase(taskID)
        .then( () => {
            let listModified = list.filter( ({id}) => taskID !== id);
            setList(listModified);
        })
    }
    const setTaskCheck = (taskID) => {
        let ind = null;
        list.map( ({id},index) => {
            if(taskID === id){
                ind = index;
            }
            return id;
        })
        if(ind !== null){
            editTaskFirebase(taskID, {done: !list[ind].done})
            .then( () => {
                let listModified = list;
                listModified.splice(ind,1,{id: taskID, title: list[ind].title, done: !listModified[ind].done})
                setList(listModified);
            })
        }
    }
    const deleteTasksCheck = () => {
        deleteTasksFirebase(list)
        .then( () => {
            let listModified = list.filter( ({done}) => done !== true);
            setList(listModified);
        })
    }
    return {list, loading, addTask, editTask, deleteTask, setTaskCheck, deleteTasksCheck};
}