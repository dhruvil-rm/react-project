import './App.css'
import Clockheading from './components/clockheading'
import Clockslogan from './components/clockslogan'
import Clocktime from './components/currenttime'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return <center>
    <Clockheading />
    <Clockslogan />
    <Clocktime />
  </center>
}

export default App
