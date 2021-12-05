import React from "react";
import {AddTask} from "components/AddTask"
import {ListOfTasks} from "components/ListOfTasks"
import { useList } from "hooks/useList";
import "./styles.scss";
export function Home(){
  const {list, addTask,editTask,deleteTask, setTaskCheck, deleteTasksCheck} = useList()
  return (
    <div className="home">
      <h1 className="home__title">Tareas</h1>
      <AddTask
        addTask = {addTask}
      />
      <ListOfTasks
        list = {list}
        editTask = {editTask}
        deleteTask = {deleteTask}
        setTaskCheck = {setTaskCheck}
        deleteTasksCheck = {deleteTasksCheck}
      />
    </div>
    );
}