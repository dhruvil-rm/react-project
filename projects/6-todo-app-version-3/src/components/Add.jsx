import styles from "./Add.module.css"
import {useState} from "react"

function Add({ onNewItem }) {

  const [todoName , setTodoName] = useState();
  const [dueDate , setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  }

  const handleAddButton = () => {
    onNewItem(todoName, dueDate)
    setTodoName("");
    setDueDate("");
  } 

  return (
    <div class="container text-center">
      <div class="row RR-row">
        <div class="col-6">
          <input className={styles.todoInput} value={todoName} onChange={handleNameChange} type="text" placeholder="Enter ToDo here" />
        </div>
        <div className="col-4">
          <input className={styles.todoInput} value={dueDate} onChange={handleDateChange} type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success RR-button" onClick={handleAddButton}>Add</button>
        </div>
      </div>
    </div>
  );
}
export default Add;