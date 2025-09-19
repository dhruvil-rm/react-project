import React, { useState } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Fooditmes from './components/Fooditem';
import Heading from './components/heading';
import Error from './components/error';
import Foodinput from './components/foodinput';
import Container from './components/container';


function App() {

  // let fooditmes = ['sabzi', 'green vegtable', 'roti', 'salad', 'milk', 'Ghee'];

  // let textStatearr = useState("FoodItem entered by user");       // usestate return array only two element
  // let textShow = textStatearr[0];
  // let setTextStates = textStatearr[1];

  // destructure
  // let [textShow, setTextStates] = useState();

  let [fooditmes, setFoodItem] = useState(['sabzi', 'green vegtable', 'roti']);


  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newItem = [...fooditmes, newFoodItem];
      setFoodItem(newItem);
    }
  }

  return (
    <>
      <Container>
        <Heading />
        <Error items={fooditmes}></Error>
        <Foodinput handleKeyDown={onKeyDown}></Foodinput>
        <Fooditmes items={fooditmes}></Fooditmes>
      </Container>

      {/* <Container>
        <p>Above is the list of healthy foods that are good for your health and well being.</p>
      </Container> */}
    </>
  )
}

export default App;
