import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(5);
  const [value, setValue] = useState('Some text');
  
  // function inputChange(){
  //   setValue(value = event.target.value);
  // }

  function increment(){
    setCount(count + 1);
    console.log(count);
  }

  function decrement(){
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="App">
      <h1>{count}</h1>

      <h1>{value}</h1>
      <input type="text" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
      <button onClick={increment} onChange={increment}>Increment</button>
      <button onClick={decrement} onChange={decrement}>Decrement</button>
    </div>
  );
}

export default App;
