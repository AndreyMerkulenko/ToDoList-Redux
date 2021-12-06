import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";


function App() {

  const dispatch = useDispatch()
  const task = useSelector(state=> state.task.task)


  return (
    <div className="App">
    <header>
        <h1>Список задач: {task.length}</h1>
      </header>
      <ToDoForm/>
        {task.map(task=>{
          return(
            <ToDo task={task} key={task.id}/>
          )
        })}
    </div>
  );
}

export default App;
