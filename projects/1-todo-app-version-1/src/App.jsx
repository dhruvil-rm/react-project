import Appname from "./components/appname";
import Add from "./components/Add";
import Toitem1 from "./components/Toitem1";
import Toitem2 from "./components/Toitem2";
import "./app.css";

function App() {

  return <center className="todo">
    <Appname />
    <Add />
    <div className="item">
      <Toitem1 />
      <Toitem2 />
    </div>
  </center>

}

export default App;
