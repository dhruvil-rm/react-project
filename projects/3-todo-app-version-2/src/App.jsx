import Appname from "./components/appname";
import Add from "./components/Add";
import "./app.css";
import Todoitems from "./components/todoitems";

function App() {

  const todoitems = [{
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

  return <center className="todo">
    <Appname />
    <Add />
    <Todoitems todoitems={todoitems}></Todoitems>
  </center>

}

export default App;
