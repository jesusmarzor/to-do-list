import React from "react";
import {AddTask} from "components/AddTask"
import {ListOfTasks} from "components/ListOfTasks"
import { ListProvider } from "contexts/ListContext";
import "./styles.scss";
export function Home(){
  return (
    <ListProvider>
      <div className="home">
        <h1 className="home__title">Tareas</h1>
        <AddTask/>
        <ListOfTasks/>
      </div>
    </ListProvider>
    );
}