import React, { useState } from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import PostItem from "./Components/PostItem";
import './styles/App.css';

function App() {

  // const [value, setValue] = useState('Some text');
  
  return (
    <div className="App">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />

    </div>
  );
}

export default App;
