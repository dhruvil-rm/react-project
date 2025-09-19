import styles from "./Add.module.css"

function Add() {
  return (
    <div class="container text-center">
      <div class="row RR-row">
        <div class="col-6">
          <input className={styles.todoInput} type="text" placeholder="Enter ToDo here" />
        </div>
        <div class="col-4">
          <input className={styles.todoInput} type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success RR-button">Add</button>
        </div>
      </div>
    </div>
  );
}
export default Add;