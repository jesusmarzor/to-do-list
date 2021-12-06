import React from "react";
import Task from "components/Task";
import { Button } from "components/Button";
import { ListConsumer } from "contexts/ListContext";
import { Spinner } from "components/Spinner";
import "./styles.scss";

export function ListOfTasks(){
    const { list, loading, deleteTasksCheck } = ListConsumer();
        if(loading){
            return <Spinner/>
        }else{
            if(list.length !== 0){
                return(
                    <div className="listOfTask">
                        <ul className="list">
                            {
                                list.map( ({id, title, done}) => {
                                    return (
                                        <li className="list__li" key = {id}>
                                            <Task
                                                id = {id}
                                                title = {title}
                                                done = {done}
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
}