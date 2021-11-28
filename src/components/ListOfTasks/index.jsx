import React from "react";
import Task from "components/Task";
import "./styles.scss";
import { Button } from "components/Button";

export function ListOfTasks({list, editTask, deleteTask, setTaskCheck, deleteTasksCheck}){
    if(list.length !== 0){
        return(
            <div className="listOfTask">
                <ul className="list">
                    {
                        list.map( ({title, done}) => {
                            return (
                                <li className="list__li" key = {title}>
                                    <Task
                                        title = {title}
                                        done = {done}
                                        editTask = {editTask}
                                        setTaskCheck = {setTaskCheck}
                                        deleteTask = {deleteTask}
                                    />
                                </li>
                            )  
                        })
                    }
                </ul>
                <Button className="deleteTasksCheck" click={deleteTasksCheck} value="Borrar tareas hechas"/>
            </div>
        )
    }else{
        return(<p className="noTasks">No hay ninguna tarea</p>)
    }
}