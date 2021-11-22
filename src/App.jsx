import './App.scss';
import {Form} from "components/Form"
import {ListOfTasks} from "components/ListOfTasks"
import { useList } from "hooks/useList";
import Logo from 'components/Logo';

function App() {
  const {list,addTask} = useList()
  return (
    <div className="App">
      <Logo/>
      <Form
        addTask = {addTask}
      />
      <ListOfTasks
        list = {list}
      />
    </div>
  );
}

export default App;
