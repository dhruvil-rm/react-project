import Appname from "./components/appname";
import Add from "./components/Add";
import "./app.css";
import Todoitems from "./components/todoitems";
import { useState } from "react";

function App() {

  const initodoitems = [{
    Name: "Buy Milk",
    DueDate: "4-10-2023"
  },
  {
    Name: "Go to Collage",
    DueDate: "4-10-2023"
  },
  {
    Name: "Like Video ",
    DueDate: "Right Now"
  }
  ];

  const [todoitems, setTodoItem] = useState(initodoitems);

  const handleNewItem = (itemName, itemDueDatde) => {
    console.log(`new item added :${itemName} Date :${itemDueDatde}`)
  }

  return <center className="todo">
    <Appname />
    <Add onNewItem={handleNewItem} />
    <Todoitems todoitems={todoitems}></Todoitems>
  </center>

}

export default App;
