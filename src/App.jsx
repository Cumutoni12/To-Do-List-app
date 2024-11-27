import "./App.css";
import Addtask from "./Components/addtask";
import ToDoItem from "./Components/ToDoItem";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <>
      <div>
        <ToDoList />
        <ToDoItem />
        <Addtask />
      </div>
    </>
  );
}

export default App;
