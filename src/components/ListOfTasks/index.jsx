import React from "react";
import Task from "components/Task";
import "./styles.scss";

export function ListOfTasks({list}){
    if(list.length !== 0){
        return(
            <ul className="listOfTask">
                {
                    list.map( task => {
                        return (
                            <li className="listOfTask__li" key = {task}>
                                <Task
                                    title = {task}
                                />
                            </li>
                        )  
                    })
                }
            </ul>
        )
    }else{
        return(<p>No hay ninguna tarea</p>)
    }
}