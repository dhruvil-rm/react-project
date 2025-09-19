function Random(){
  
  let Number = Math.random() * 100;

  return <h2 style={{'backgroundColor':'#776691'}}>
    Random number is : {Math.round(Number)}
  </h2>
}

export default Random;