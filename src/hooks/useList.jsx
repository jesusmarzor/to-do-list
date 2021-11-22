import { useState } from "react"

export function useList(){
    if(localStorage.getItem('tasks') === null)
        localStorage.setItem('tasks',JSON.stringify([]));
    const [list, setList] = useState(JSON.parse(localStorage.getItem('tasks')));
    const addTask = (newTask) => {
        if(newTask !== '' ){
            let  existTask = false;
            list.map( (task) => {
                if(task === newTask){
                existTask = true
                }
                return existTask;
            })
            if(!existTask){
                localStorage.setItem('tasks', JSON.stringify([newTask, ...list]))
                setList(JSON.parse(localStorage.getItem('tasks')));
            }
        }
    }
    return {list, addTask};
}