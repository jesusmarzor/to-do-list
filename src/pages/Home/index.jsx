import React from "react";
import {Form} from "components/Form"
import {ListOfTasks} from "components/ListOfTasks"
import { useList } from "hooks/useList";
import { User } from "components/User";
export function Home({logout}){
  const {list, addTask,editTask,deleteTask, setTaskCheck, deleteTasksCheck} = useList()
  return (
    <div>
        <User logout={logout}/>
        <Form
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