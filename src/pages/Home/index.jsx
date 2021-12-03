import React from "react";
import {AddTask} from "components/AddTask"
import {ListOfTasks} from "components/ListOfTasks"
import { useList } from "hooks/useList";
import { Nav } from "components/Nav";
export function Home({logout}){
  const {list, addTask,editTask,deleteTask, setTaskCheck, deleteTasksCheck} = useList()
  return (
    <div>
      <header className="header">
        <Nav logout={logout}/>
      </header>
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